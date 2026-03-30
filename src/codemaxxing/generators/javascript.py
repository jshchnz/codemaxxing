import random
from io import StringIO

from codemaxxing.generators.base import SlopGenerator, GeneratedFile
from codemaxxing import naming, comments


class JavaScriptGenerator(SlopGenerator):
    name = "javascript"
    language = "javascript"
    extension = ".js"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        use_ts = random.random() < 0.4
        ext = ".ts" if use_ts else ".js"
        module_name = naming.class_name(sanity)

        # mixed imports (require + import at low sanity)
        buf.write(f"// {comments.comment(sanity)}\n")
        buf.write(f"'use strict';\n\n")

        num_imports = random.randint(8, 20)
        for _ in range(num_imports):
            imp_name = naming.class_name(sanity)
            if sanity < 0.3 and random.random() < 0.5:
                buf.write(f"const {imp_name} = require('./{naming.class_name(sanity)}');\n")
            else:
                buf.write(f"import {{ {imp_name} }} from './{naming.class_name(sanity)}';\n")
        buf.write("\n")

        # TypeScript types (if TS or sometimes anyway because chaos)
        if use_ts or sanity < 0.3:
            num_types = random.randint(3, 8)
            for _ in range(num_types):
                tname = naming.class_name(sanity) + "Type"
                if random.random() < 0.5:
                    buf.write(f"type {tname} = {{\n")
                    for _ in range(random.randint(3, 8)):
                        buf.write(f"  {naming.var_name(sanity)}: {random.choice(['string', 'number', 'boolean', 'any', 'unknown', 'never', 'void', 'null | undefined'])};\n")
                    buf.write(f"}};\n\n")
                else:
                    inner = naming.class_name(sanity) + "Type"
                    buf.write(f"type {tname} = {{ value: {inner} | null | undefined | {tname} }};\n\n")

        # massive switch statement
        buf.write(f"// {comments.comment(sanity)}\n")
        switch_func = naming.method_name(sanity)
        buf.write(f"function {switch_func}(input) {{\n")
        buf.write(f"  switch (input) {{\n")
        num_cases = random.randint(20, 50)
        for i in range(num_cases):
            case_val = random.choice([f"'{naming.var_name(sanity)}'", str(random.randint(0, 999)), f"'{random.choice(naming.CHAOS_WORDS)}'"])
            buf.write(f"    case {case_val}:\n")
            buf.write(f"      console.log('{naming.var_name(sanity)}'); // {comments.comment(sanity)}\n")
            buf.write(f"      break;\n")
        buf.write(f"    default:\n")
        buf.write(f"      return null; // {comments.comment(sanity)}\n")
        buf.write(f"  }}\n")
        buf.write(f"}}\n\n")

        # callback hell
        buf.write(f"// {comments.comment(sanity)}\n")
        callback_func = naming.method_name(sanity)
        buf.write(f"function {callback_func}(callback) {{\n")
        depth = random.randint(5, 10)
        for d in range(depth):
            indent = "  " * (d + 1)
            vname = naming.var_name(sanity)
            buf.write(f"{indent}setTimeout(function() {{\n")
            buf.write(f"{indent}  var {vname} = null; // {comments.comment(sanity)}\n")
            buf.write(f"{indent}  console.log('{naming.var_name(sanity)}');\n")
        for d in range(depth, 0, -1):
            indent = "  " * d
            buf.write(f"{indent}}}, {random.randint(0, 5000)});\n")
        buf.write(f"}}\n\n")

        # promise chain
        buf.write(f"// {comments.comment(sanity)}\n")
        promise_func = naming.method_name(sanity)
        buf.write(f"function {promise_func}() {{\n")
        buf.write(f"  return new Promise((resolve, reject) => {{\n")
        buf.write(f"    resolve(undefined);\n")
        buf.write(f"  }})\n")
        chain_len = random.randint(5, 15)
        for _ in range(chain_len):
            vname = naming.var_name(sanity)
            buf.write(f"    .then(({vname}) => {{\n")
            buf.write(f"      // {comments.comment(sanity)}\n")
            buf.write(f"      return {vname};\n")
            buf.write(f"    }})\n")
        buf.write(f"    .catch((err) => {{\n")
        buf.write(f"      // {comments.comment(sanity)}\n")
        buf.write(f"      return null;\n")
        buf.write(f"    }});\n")
        buf.write(f"}}\n\n")

        # class with methods that do nothing
        buf.write(f"class {module_name} {{\n")
        buf.write(f"  constructor() {{\n")
        num_props = random.randint(5, 12)
        for _ in range(num_props):
            buf.write(f"    this.{naming.var_name(sanity)} = null;\n")
        buf.write(f"  }}\n\n")

        num_methods = random.randint(4, 10)
        for _ in range(num_methods):
            mname = naming.method_name(sanity)
            params = ", ".join(naming.var_name(sanity) for _ in range(random.randint(0, 4)))
            buf.write(f"  // {comments.comment(sanity)}\n")
            buf.write(f"  {mname}({params}) {{\n")
            for _ in range(random.randint(2, 6)):
                buf.write(f"    const {naming.var_name(sanity)} = null; // {comments.comment(sanity)}\n")
            buf.write(f"    return undefined;\n")
            buf.write(f"  }}\n\n")
        buf.write(f"}}\n\n")

        buf.write(f"module.exports = {{ {module_name}, {switch_func}, {callback_func}, {promise_func} }};\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"js/{module_name}_{file_index}{ext}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
