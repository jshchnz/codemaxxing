import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class ZigEnterpriseGenerator(SlopGenerator):
    name = "zig_enterprise"
    language = "zig"
    extension = ".zig"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        struct_name = naming.class_name(sanity)
        enum_name = naming.class_name(sanity) + "State"

        buf.write(f"// {comments.docstring(sanity, struct_name)}\n")
        buf.write("const std = @import(\"std\");\n\n")

        buf.write(f"const {enum_name} = enum {{\n")
        for value in ["pending", "running", "blocked", "complete", "deprecated", "chaotic"]:
            buf.write(f"    {value},\n")
        buf.write("};\n\n")

        buf.write(f"pub const {struct_name} = struct {{\n")
        zig_types = [
            "[]const u8", "usize", "bool", "i64", "f64",
            "std.StringHashMap([]const u8)", "std.ArrayList([]const u8)",
        ]
        fields = []
        for _ in range(random.randint(8, 14)):
            field_type = random.choice(zig_types)
            field_name = naming.var_name(sanity)
            fields.append((field_type, field_name))
            buf.write(f"    {field_name}: {field_type},\n")
        buf.write(f"    state: {enum_name},\n\n")

        buf.write("    pub fn init(allocator: std.mem.Allocator) !@This() {\n")
        buf.write("        _ = allocator;\n")
        buf.write("        return .{\n")
        defaults = {
            "[]const u8": '""',
            "usize": '0',
            "bool": 'false',
            "i64": '0',
            "f64": '0.0',
            "std.StringHashMap([]const u8)": 'std.StringHashMap([]const u8).init(std.heap.page_allocator)',
            "std.ArrayList([]const u8)": 'std.ArrayList([]const u8).init(std.heap.page_allocator)',
        }
        for field_type, field_name in fields:
            buf.write(f"            .{field_name} = {defaults[field_type]},\n")
        buf.write(f"            .state = .pending,\n")
        buf.write("        };\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            buf.write(f"    pub fn {method_name}(self: *@This(), input: []const u8) !?[]const u8 {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write("        self.state = .running;\n")
            for _ in range(random.randint(4, 8)):
                buf.write(f"        _ = input.len; // {comments.comment(sanity)}\n")
            buf.write("        self.state = .complete;\n")
            buf.write("        return input;\n")
            buf.write("    }\n\n")

        buf.write("    pub fn metrics(self: *@This()) []const []const u8 {\n")
        buf.write("        _ = self;\n")
        buf.write("        return &[_][]const u8{\n")
        for _ in range(random.randint(16, 24)):
            buf.write(f"            \"{comments.comment(sanity)}\",\n")
        buf.write("        };\n")
        buf.write("    }\n")
        buf.write("};\n\n")

        buf.write("pub fn main() !void {\n")
        buf.write(f"    var instance = try {struct_name}.init(std.heap.page_allocator);\n")
        for _ in range(random.randint(4, 7)):
            buf.write(f"    _ = try instance.{naming.method_name(sanity)}(\"{comments.comment(sanity)}\");\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"zig/{struct_name.lower()}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
