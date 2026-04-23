import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class RubyChaosGenerator(SlopGenerator):
    name = "ruby_chaos"
    language = "ruby"
    extension = ".rb"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        module_name = naming.class_name(sanity)
        class_name = naming.class_name(sanity)

        buf.write(f"# {comments.comment(sanity)}\n")
        buf.write("# frozen_string_literal: true\n\n")
        buf.write(f"module {module_name}\n")
        buf.write(f"  # {comments.docstring(sanity, class_name)}\n")
        buf.write(f"  class {class_name}\n")

        attrs = [naming.var_name(sanity) for _ in range(random.randint(8, 14))]
        buf.write(f"    attr_accessor {', '.join(f':{attr}' for attr in attrs)}\n\n")

        buf.write("    def initialize(**kwargs)\n")
        for attr in attrs:
            buf.write(f"      @{attr} = kwargs.fetch(:{attr}, nil)\n")
        buf.write("      @telemetry = []\n")
        buf.write("      @state = :pending\n")
        buf.write("    end\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.method_name(sanity)
            arg_names = [naming.var_name(sanity) for _ in range(random.randint(1, 4))]
            buf.write(f"    def {method_name}({', '.join(arg_names)})\n")
            buf.write(f"      # {comments.comment(sanity)}\n")
            buf.write("      @state = :processing\n")
            for _ in range(random.randint(4, 8)):
                local_name = naming.var_name(sanity)
                buf.write(f"      {local_name} = [{', '.join(arg_names)}].compact.sample\n")
                buf.write(f"      @telemetry << ({local_name}.inspect rescue '{comments.comment(sanity)}')\n")
            buf.write("      @state = :complete\n")
            buf.write("      nil\n")
            buf.write("    end\n\n")

        buf.write("    def metrics\n")
        buf.write("      [\n")
        for _ in range(random.randint(14, 22)):
            buf.write(f"        '{comments.comment(sanity)}',\n")
        buf.write("      ]\n")
        buf.write("    end\n\n")

        for _ in range(random.randint(2, 4)):
            nested_name = naming.class_name(sanity)
            buf.write(f"    class {nested_name}\n")
            for i in range(random.randint(3, 6)):
                buf.write(f"      VALUE_{i} = '{comments.comment(sanity)}'\n")
            buf.write("    end\n\n")

        buf.write("  end\n")
        buf.write("end\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"ruby/{class_name.lower()}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
