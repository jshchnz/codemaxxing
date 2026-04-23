import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class CSlopGenerator(SlopGenerator):
    name = "c_slop"
    language = "c"
    extension = ".c"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        header_guardish = naming.class_name(sanity).upper()
        struct_name = naming.class_name(sanity)

        buf.write(f"/* {comments.docstring(sanity, struct_name)} */\n")
        buf.write("#include <stdio.h>\n")
        buf.write("#include <stdlib.h>\n")
        buf.write("#include <string.h>\n")
        buf.write("#include <stdbool.h>\n")
        buf.write("#include <stdint.h>\n\n")

        buf.write(f"typedef enum {header_guardish}_STATE {{\n")
        for index, value in enumerate(["PENDING", "RUNNING", "BLOCKED", "DONE", "CURSED", "TRANSCENDENT"]):
            buf.write(f"    {header_guardish}_{value} = {index},\n")
        buf.write(f"}} {header_guardish}_STATE;\n\n")

        buf.write(f"typedef struct {struct_name} {{\n")
        c_types = ["int", "long", "double", "bool", "char *", "void *", "size_t", "uint64_t"]
        fields = []
        for _ in range(random.randint(10, 16)):
            field_type = random.choice(c_types)
            field_name = naming.var_name(sanity)
            fields.append((field_type, field_name))
            buf.write(f"    {field_type} {field_name};\n")
        buf.write(f"    {header_guardish}_STATE state;\n")
        buf.write(f"}} {struct_name};\n\n")

        buf.write(f"static {struct_name} *create_{struct_name.lower()}(void) {{\n")
        buf.write(f"    {struct_name} *instance = ({struct_name} *)calloc(1, sizeof({struct_name}));\n")
        buf.write("    if (instance == NULL) {\n")
        buf.write("        return NULL;\n")
        buf.write("    }\n")
        for _, field_name in fields:
            buf.write(f"    instance->{field_name} = 0;\n")
        buf.write(f"    instance->state = {header_guardish}_PENDING;\n")
        buf.write("    return instance;\n")
        buf.write("}\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            buf.write(f"static int {method_name}_{file_index}({struct_name} *context, const char *input) {{\n")
            buf.write(f"    /* {comments.comment(sanity)} */\n")
            buf.write("    if (context == NULL) {\n")
            buf.write("        return -1;\n")
            buf.write("    }\n")
            buf.write("    context->state = 1;\n")
            for _ in range(random.randint(6, 12)):
                local_name = naming.var_name(sanity)
                buf.write(f"    size_t {local_name} = input == NULL ? 0U : strlen(input);\n")
                buf.write(f"    context->{random.choice(fields)[1]} = (long){local_name};\n")
            buf.write("    return 0;\n")
            buf.write("}\n\n")

        buf.write("static void print_metrics(void) {\n")
        for _ in range(random.randint(18, 26)):
            buf.write(f"    puts(\"{comments.comment(sanity)}\");\n")
        buf.write("}\n\n")

        buf.write("int main(void) {\n")
        buf.write(f"    {struct_name} *instance = create_{struct_name.lower()}();\n")
        buf.write("    if (instance == NULL) {\n")
        buf.write("        return 1;\n")
        buf.write("    }\n")
        for _ in range(random.randint(4, 7)):
            buf.write(f"    (void){naming.method_name(sanity)}_{file_index}(instance, \"{comments.comment(sanity)}\");\n")
        buf.write("    print_metrics();\n")
        buf.write("    free(instance);\n")
        buf.write("    return 0;\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"c/{struct_name.lower()}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
