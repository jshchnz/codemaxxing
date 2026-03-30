import random
from io import StringIO

from codemaxxing.generators.base import SlopGenerator, GeneratedFile
from codemaxxing import naming, comments


class EnterpriseJavaGenerator(SlopGenerator):
    name = "enterprise_java"
    language = "java"
    extension = ".java"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        cname = naming.class_name(sanity)
        pkg = naming.java_package(sanity)

        buf.write(f"package {pkg};\n\n")

        # imports
        num_imports = random.randint(5, 15)
        for _ in range(num_imports):
            imp_pkg = naming.java_package(sanity)
            imp_class = naming.class_name(sanity)
            buf.write(f"import {imp_pkg}.{imp_class};\n")
        buf.write("\n")

        # javadoc
        buf.write("/**\n")
        buf.write(f" * {comments.docstring(sanity, cname)}\n")
        buf.write(f" * @author {naming._blend(['Enterprise Code Generator', 'Architecture Team', 'Senior Staff Engineer'], ['a mass of vibes', 'the mass void', 'nobody'], sanity)}\n")
        buf.write(f" * @since 1.0.0\n")
        buf.write(f" * @deprecated Since before it was written\n")
        buf.write(" */\n")

        # class declaration
        extends = [naming.class_name(sanity) for _ in range(random.randint(0, 2))]
        implements = [naming.class_name(sanity) for _ in range(random.randint(1, 4))]

        decl = f"public class {cname}"
        if extends:
            decl += f" extends {extends[0]}"
        if implements:
            decl += f" implements {', '.join(implements)}"
        buf.write(f"{decl} {{\n\n")

        # fields with getters and setters
        num_fields = random.randint(4, 12)
        fields = []
        java_types = ["String", "int", "long", "boolean", "double", "Object",
                       "List<Object>", "Map<String, Object>", "Optional<String>",
                       "AbstractFactory", "ServiceProvider", "CompletableFuture<Void>"]
        for _ in range(num_fields):
            field_name = naming.var_name(sanity)
            field_type = random.choice(java_types)
            fields.append((field_type, field_name))
            buf.write(f"    private {field_type} {field_name};\n")
        buf.write("\n")

        # constructor
        buf.write(f"    public {cname}(")
        buf.write(", ".join(f"{t} {n}" for t, n in fields[:6]))
        buf.write(") {\n")
        for t, n in fields[:6]:
            buf.write(f"        this.{n} = {n};\n")
        buf.write("    }\n\n")

        # getters and setters
        for field_type, field_name in fields:
            cap = field_name[0].upper() + field_name[1:] if field_name else "X"
            buf.write(f"    /**\n")
            buf.write(f"     * Gets the {field_name}.\n")
            buf.write(f"     * @return the {field_name}\n")
            buf.write(f"     */\n")
            buf.write(f"    public {field_type} get{cap}() {{\n")
            buf.write(f"        return this.{field_name};\n")
            buf.write(f"    }}\n\n")
            buf.write(f"    /**\n")
            buf.write(f"     * Sets the {field_name}.\n")
            buf.write(f"     * @param {field_name} the {field_name} to set\n")
            buf.write(f"     */\n")
            buf.write(f"    public void set{cap}({field_type} {field_name}) {{\n")
            buf.write(f"        this.{field_name} = {field_name};\n")
            buf.write(f"    }}\n\n")

        # methods that do nothing
        num_methods = random.randint(3, 8)
        for _ in range(num_methods):
            mname = naming.method_name(sanity)
            return_type = random.choice(["void", "Object", "String", "boolean", "int"])
            params = ", ".join(
                f"{random.choice(java_types)} {naming.var_name(sanity)}"
                for _ in range(random.randint(0, 4))
            )
            for line in comments.block_comment(sanity, "    //"):
                buf.write(f"{line}\n")
            buf.write(f"    public {return_type} {mname}({params}) {{\n")

            # method body
            num_body_lines = random.randint(2, 10)
            for _ in range(num_body_lines):
                vname = naming.var_name(sanity)
                buf.write(f"        Object {vname} = null; // {comments.comment(sanity)}\n")
            if return_type == "void":
                buf.write(f"        // {comments.comment(sanity)}\n")
            elif return_type == "boolean":
                buf.write(f"        return false; // {comments.comment(sanity)}\n")
            elif return_type == "int":
                buf.write(f"        return 0; // {comments.comment(sanity)}\n")
            else:
                buf.write(f"        return null; // {comments.comment(sanity)}\n")
            buf.write(f"    }}\n\n")

        # inner classes
        num_inner = random.randint(1, 3)
        for _ in range(num_inner):
            inner_name = naming.class_name(sanity)
            buf.write(f"    public static class {inner_name} {{\n")
            for _ in range(random.randint(2, 5)):
                buf.write(f"        private Object {naming.var_name(sanity)};\n")
            buf.write(f"    }}\n\n")

        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"java/{cname}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
