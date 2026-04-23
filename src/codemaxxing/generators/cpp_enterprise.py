import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class CppEnterpriseGenerator(SlopGenerator):
    name = "cpp_enterprise"
    language = "cpp"
    extension = ".cpp"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        namespace_name = naming.class_name(sanity)
        class_name = naming.class_name(sanity)
        interface_name = naming.class_name(sanity) + "Contract"
        enum_name = naming.class_name(sanity) + "State"

        buf.write(f"// {comments.docstring(sanity, class_name)}\n")
        buf.write("#include <string>\n#include <vector>\n#include <map>\n#include <memory>\n#include <optional>\n#include <iostream>\n#include <sstream>\n#include <utility>\n\n")

        buf.write(f"namespace {namespace_name} {{\n\n")
        buf.write(f"enum class {enum_name} {{ Pending, Running, Blocked, Complete, Deprecated, Chaotic }};\n\n")

        buf.write(f"class {interface_name} {{\n")
        buf.write("public:\n")
        buf.write(f"    virtual ~{interface_name}() = default;\n")
        for _ in range(random.randint(4, 8)):
            buf.write(f"    virtual std::optional<std::string> {naming.method_name(sanity)}(const std::string& input) = 0;\n")
        buf.write("};\n\n")

        buf.write(f"class {class_name} final : public {interface_name} {{\n")
        buf.write("private:\n")
        cpp_types = [
            "std::string", "int", "long", "bool", "double",
            "std::vector<std::string>", "std::map<std::string, std::string>",
            "std::optional<std::string>",
        ]
        fields = []
        for _ in range(random.randint(10, 16)):
            field_type = random.choice(cpp_types)
            field_name = naming.var_name(sanity)
            fields.append((field_type, field_name))
            buf.write(f"    {field_type} {field_name};\n")
        buf.write(f"    {enum_name} state_;\n\n")

        buf.write("public:\n")
        buf.write(f"    {class_name}()\n        : state_({enum_name}::Pending) {{\n")
        for field_type, field_name in fields:
            value = {
                "std::string": '""',
                "int": '0',
                "long": '0L',
                "bool": 'false',
                "double": '0.0',
                "std::vector<std::string>": '{}',
                "std::map<std::string, std::string>": '{}',
                "std::optional<std::string>": 'std::nullopt',
            }[field_type]
            buf.write(f"        this->{field_name} = {value};\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            buf.write(f"    std::optional<std::string> {method_name}(const std::string& input) override {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write(f"        state_ = {enum_name}::Running;\n")
            buf.write("        std::stringstream builder;\n")
            for _ in range(random.randint(5, 10)):
                buf.write(f"        builder << \"{comments.comment(sanity)}\" << input;\n")
            buf.write("        return builder.str();\n")
            buf.write("    }\n\n")

        buf.write("    std::vector<std::string> metrics() const {\n")
        buf.write("        return {\n")
        for _ in range(random.randint(16, 24)):
            buf.write(f"            \"{comments.comment(sanity)}\",\n")
        buf.write("        };\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(2, 4)):
            nested_name = naming.class_name(sanity)
            buf.write(f"    struct {nested_name} {{\n")
            for _ in range(random.randint(4, 7)):
                buf.write(f"        std::string {naming.var_name(sanity)} = \"{comments.comment(sanity)}\";\n")
            buf.write("    };\n\n")

        buf.write("};\n\n")
        buf.write("} // namespace\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"cpp/{class_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
