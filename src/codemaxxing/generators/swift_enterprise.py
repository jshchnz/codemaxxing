import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class SwiftEnterpriseGenerator(SlopGenerator):
    name = "swift_enterprise"
    language = "swift"
    extension = ".swift"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        protocol_name = naming.class_name(sanity) + "Protocol"
        class_name = naming.class_name(sanity)
        enum_name = naming.class_name(sanity) + "State"
        struct_name = naming.class_name(sanity) + "Payload"

        buf.write("import Foundation\n\n")
        buf.write(f"/// {comments.docstring(sanity, class_name)}\n")
        buf.write(f"enum {enum_name}: String, CaseIterable {{\n")
        for value in ["pending", "running", "blocked", "complete", "deprecated", "chaotic"]:
            buf.write(f"    case {value}\n")
        buf.write("}\n\n")

        buf.write(f"protocol {protocol_name} {{\n")
        for _ in range(random.randint(5, 9)):
            buf.write(f"    func {naming.method_name(sanity)}(_ input: {struct_name}?) -> {struct_name}?\n")
        buf.write("}\n\n")

        buf.write(f"struct {struct_name} {{\n")
        swift_types = ["String", "Int", "Bool", "Double", "[String]", "[String: Any]"]
        for _ in range(random.randint(8, 12)):
            buf.write(f"    var {naming.var_name(sanity)}: {random.choice(swift_types)}\n")
        buf.write(f"    var state: {enum_name}\n")
        buf.write("}\n\n")

        buf.write(f"final class {class_name}: {protocol_name} {{\n")
        buf.write(f"    private var state: {enum_name} = .pending\n")
        buf.write("    private var telemetry: [String] = []\n")
        for _ in range(random.randint(8, 12)):
            buf.write(f"    private var {naming.var_name(sanity)}: String = \"{comments.comment(sanity)}\"\n")
        buf.write("\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            buf.write(f"    func {method_name}(_ input: {struct_name}?) -> {struct_name}? {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write("        state = .running\n")
            for _ in range(random.randint(5, 9)):
                buf.write(f"        telemetry.append(\"{comments.comment(sanity)}\")\n")
            buf.write("        guard var payload = input else { return nil }\n")
            buf.write("        payload.state = .complete\n")
            buf.write("        return payload\n")
            buf.write("    }\n\n")

        buf.write("    func metrics() -> [String] {\n")
        buf.write("        return [\n")
        for _ in range(random.randint(16, 24)):
            buf.write(f"            \"{comments.comment(sanity)}\",\n")
        buf.write("        ]\n")
        buf.write("    }\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"swift/{class_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
