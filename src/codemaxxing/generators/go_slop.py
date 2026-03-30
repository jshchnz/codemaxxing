import random
from io import StringIO

from codemaxxing.generators.base import SlopGenerator, GeneratedFile
from codemaxxing import naming, comments


class GoSlopGenerator(SlopGenerator):
    name = "go_slop"
    language = "go"
    extension = ".go"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        pkg = naming.go_package(sanity)
        struct_name = naming.class_name(sanity)

        buf.write(f"package {pkg}\n\n")

        # imports (including unused ones)
        go_imports = [
            '"fmt"', '"errors"', '"context"', '"sync"', '"time"',
            '"strings"', '"strconv"', '"io"', '"os"', '"log"',
            '"encoding/json"', '"net/http"', '"database/sql"',
            '"crypto/rand"', '"math/big"', '"bytes"',
        ]
        used = random.sample(go_imports, random.randint(4, 10))
        buf.write("import (\n")
        for imp in used:
            buf.write(f"\t{imp}\n")
        buf.write(")\n\n")

        # suppress unused import errors
        buf.write("// suppress unused imports\n")
        buf.write("var (\n")
        for imp in used:
            name = imp.strip('"').split("/")[-1]
            buf.write(f"\t_ = {name}.ErrClosedPipe\n") if name == "io" else None
        buf.write("\t_ = fmt.Sprintf\n")
        buf.write("\t_ = errors.New\n")
        buf.write(")\n\n")

        # massive struct
        buf.write(f"// {comments.comment(sanity)}\n")
        buf.write(f"type {struct_name} struct {{\n")
        go_types = ["interface{}", "string", "int", "int64", "bool", "float64",
                     "[]byte", "map[string]interface{}", "chan struct{}",
                     "context.Context", "*sync.Mutex", "error",
                     "func() error", "[]interface{}", "*" + naming.class_name(sanity)]
        num_fields = random.randint(10, 20)
        field_names = []
        for _ in range(num_fields):
            fname = naming.var_name(sanity)
            fname = fname[0].upper() + fname[1:]  # exported
            ftype = random.choice(go_types)
            field_names.append(fname)
            tag = f'`json:"{fname.lower()}" yaml:"{fname.lower()}" xml:"{fname.lower()}"`'
            buf.write(f"\t{fname} {ftype} {tag}\n")
        buf.write("}\n\n")

        # constructor
        buf.write(f"// New{struct_name} creates a new {struct_name}.\n")
        buf.write(f"// {comments.comment(sanity)}\n")
        buf.write(f"func New{struct_name}(ctx context.Context) (*{struct_name}, error) {{\n")
        buf.write(f"\tif ctx == nil {{\n")
        buf.write(f"\t\treturn nil, errors.New(\"{naming.var_name(sanity)}: context cannot be nil\")\n")
        buf.write(f"\t}}\n")
        buf.write(f"\treturn &{struct_name}{{}}, nil\n")
        buf.write(f"}}\n\n")

        # methods with excessive error handling
        num_methods = random.randint(5, 12)
        for _ in range(num_methods):
            mname = naming.method_name(sanity)
            mname = mname[0].upper() + mname[1:]
            receiver = struct_name[0].lower()
            return_type = random.choice(["error", "(interface{}, error)", "(string, error)", "(bool, error)", "(int, error)"])

            buf.write(f"// {mname} {comments.comment(sanity)}\n")
            buf.write(f"func ({receiver} *{struct_name}) {mname}(ctx context.Context) {return_type} {{\n")

            # error check chain
            num_checks = random.randint(2, 6)
            for i in range(num_checks):
                err_var = f"err{i}" if sanity < 0.5 and i > 0 else "err"
                vname = naming.var_name(sanity)
                buf.write(f"\t{vname}, {err_var} := func() (interface{{}}, error) {{\n")
                buf.write(f"\t\t// {comments.comment(sanity)}\n")
                buf.write(f"\t\treturn nil, nil\n")
                buf.write(f"\t}}()\n")
                buf.write(f"\tif {err_var} != nil {{\n")
                if "interface" in return_type or "string" in return_type:
                    buf.write(f"\t\treturn nil, {err_var}\n")
                elif "bool" in return_type:
                    buf.write(f"\t\treturn false, {err_var}\n")
                elif "int" in return_type:
                    buf.write(f"\t\treturn 0, {err_var}\n")
                else:
                    buf.write(f"\t\treturn {err_var}\n")
                buf.write(f"\t}}\n")
                buf.write(f"\t_ = {vname} // {comments.comment(sanity)}\n\n")

            if return_type == "error":
                buf.write(f"\treturn nil\n")
            elif "bool" in return_type:
                buf.write(f"\treturn false, nil\n")
            elif "int" in return_type:
                buf.write(f"\treturn 0, nil\n")
            else:
                buf.write(f"\treturn nil, nil\n")
            buf.write(f"}}\n\n")

        # interfaces that nothing implements
        num_interfaces = random.randint(2, 4)
        for _ in range(num_interfaces):
            iname = naming.class_name(sanity)
            buf.write(f"// {iname} {comments.comment(sanity)}\n")
            buf.write(f"type {iname} interface {{\n")
            for _ in range(random.randint(3, 8)):
                imname = naming.method_name(sanity)
                imname = imname[0].upper() + imname[1:]
                buf.write(f"\t{imname}(ctx context.Context) error\n")
            buf.write(f"}}\n\n")

        # goroutine that sends to channels nobody reads
        buf.write(f"// {comments.comment(sanity)}\n")
        buf.write(f"func ({struct_name[0].lower()} *{struct_name}) startWorkers(ctx context.Context) {{\n")
        buf.write(f"\tch := make(chan interface{{}}, 100)\n")
        buf.write(f"\tvar wg sync.WaitGroup\n")
        num_workers = random.randint(3, 7)
        for i in range(num_workers):
            buf.write(f"\twg.Add(1)\n")
            buf.write(f"\tgo func() {{\n")
            buf.write(f"\t\tdefer wg.Done()\n")
            buf.write(f"\t\tfor {{\n")
            buf.write(f"\t\t\tselect {{\n")
            buf.write(f"\t\t\tcase <-ctx.Done():\n")
            buf.write(f"\t\t\t\treturn\n")
            buf.write(f"\t\t\tcase ch <- nil: // {comments.comment(sanity)}\n")
            buf.write(f"\t\t\t\ttime.Sleep(time.Millisecond)\n")
            buf.write(f"\t\t\t}}\n")
            buf.write(f"\t\t}}\n")
            buf.write(f"\t}}()\n\n")
        buf.write(f"\t_ = ch\n")
        buf.write(f"\twg.Wait()\n")
        buf.write(f"}}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"go/{struct_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
