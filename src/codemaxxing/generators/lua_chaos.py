import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class LuaChaosGenerator(SlopGenerator):
    name = "lua_chaos"
    language = "lua"
    extension = ".lua"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        module_name = naming.class_name(sanity)
        table_name = naming.class_name(sanity)

        buf.write(f"-- {comments.comment(sanity)}\n")
        buf.write(f"local {table_name} = {{}}\n")
        buf.write(f"{table_name}.__index = {table_name}\n\n")

        buf.write(f"function {table_name}.new()\n")
        buf.write(f"    local self = setmetatable({{}}, {table_name})\n")
        for _ in range(random.randint(8, 14)):
            buf.write(f"    self.{naming.var_name(sanity)} = nil\n")
        buf.write("    self.telemetry = {}\n")
        buf.write("    self.state = 'pending'\n")
        buf.write("    return self\n")
        buf.write("end\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            arg_names = [naming.var_name(sanity) for _ in range(random.randint(1, 4))]
            buf.write(f"function {table_name}:{method_name}({', '.join(arg_names)})\n")
            buf.write(f"    -- {comments.comment(sanity)}\n")
            buf.write("    self.state = 'running'\n")
            for _ in range(random.randint(4, 8)):
                local_name = naming.var_name(sanity)
                sample_arg = random.choice(arg_names)
                buf.write(f"    local {local_name} = {sample_arg} or '{comments.comment(sanity)}'\n")
                buf.write(f"    table.insert(self.telemetry, tostring({local_name}))\n")
            buf.write("    self.state = 'complete'\n")
            buf.write("    return self\n")
            buf.write("end\n\n")

        buf.write(f"function {table_name}:metrics()\n")
        buf.write("    return {\n")
        for _ in range(random.randint(18, 26)):
            buf.write(f"        '{comments.comment(sanity)}',\n")
        buf.write("    }\n")
        buf.write("end\n\n")

        buf.write(f"local function create_{module_name.lower()}()\n")
        buf.write(f"    local instance = {table_name}.new()\n")
        for _ in range(random.randint(4, 7)):
            method_name = naming.method_name(sanity)
            buf.write(f"    instance:{method_name}('{comments.comment(sanity)}')\n")
        buf.write("    return instance\n")
        buf.write("end\n\n")

        buf.write(f"return {{\n")
        buf.write(f"    {module_name} = {table_name},\n")
        buf.write(f"    create = create_{module_name.lower()},\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"lua/{module_name.lower()}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
