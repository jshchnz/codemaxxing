import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class PhpEnterpriseGenerator(SlopGenerator):
    name = "php_enterprise"
    language = "php"
    extension = ".php"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        namespace_name = "Codemaxxing\\" + naming.class_name(sanity)
        class_name = naming.class_name(sanity)
        trait_name = naming.class_name(sanity) + "Trait"
        interface_name = naming.class_name(sanity) + "Contract"

        buf.write("<?php\n\n")
        buf.write(f"namespace {namespace_name};\n\n")
        buf.write("use ArrayObject;\nuse DateTimeImmutable;\nuse RuntimeException;\n\n")

        buf.write(f"/**\n * {comments.docstring(sanity, class_name)}\n */\n")
        buf.write(f"interface {interface_name}\n{{\n")
        for _ in range(random.randint(4, 7)):
            buf.write(f"    public function {naming.method_name(sanity)}(mixed $input, array $context = []): mixed;\n")
        buf.write("}\n\n")

        buf.write(f"trait {trait_name}\n{{\n")
        for _ in range(random.randint(4, 8)):
            buf.write(f"    private string ${naming.var_name(sanity)} = '{comments.comment(sanity)}';\n")
        buf.write("\n")
        for _ in range(random.randint(3, 5)):
            method_name = naming.method_name(sanity)
            buf.write(f"    protected function {method_name}Note(): string\n    {{\n")
            buf.write(f"        return '{comments.comment(sanity)}';\n")
            buf.write("    }\n\n")
        buf.write("}\n\n")

        buf.write(f"final class {class_name} implements {interface_name}\n{{\n")
        buf.write(f"    use {trait_name};\n\n")
        properties = []
        php_types = ["string", "int", "bool", "array", "ArrayObject", "DateTimeImmutable"]
        for _ in range(random.randint(8, 14)):
            prop_type = random.choice(php_types)
            prop_name = naming.var_name(sanity)
            properties.append((prop_type, prop_name))
            buf.write(f"    private {prop_type} ${prop_name};\n")
        buf.write("\n")

        buf.write("    public function __construct()\n    {\n")
        defaults = {
            "string": "''",
            "int": "0",
            "bool": "false",
            "array": "[]",
            "ArrayObject": "new ArrayObject()",
            "DateTimeImmutable": "new DateTimeImmutable()",
        }
        for prop_type, prop_name in properties:
            buf.write(f"        $this->{prop_name} = {defaults[prop_type]};\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(5, 9)):
            method_name = naming.method_name(sanity)
            buf.write(f"    public function {method_name}(mixed $input, array $context = []): mixed\n    {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            for _ in range(random.randint(5, 10)):
                buf.write(f"        $context['{naming.var_name(sanity)}'] = '{comments.comment(sanity)}';\n")
            buf.write("        if ($input === null) {\n")
            buf.write("            return $context;\n")
            buf.write("        }\n")
            buf.write("        return $input;\n")
            buf.write("    }\n\n")

        buf.write("    public function metrics(): array\n    {\n")
        buf.write("        return [\n")
        for _ in range(random.randint(12, 20)):
            buf.write(f"            '{comments.comment(sanity)}',\n")
        buf.write("        ];\n")
        buf.write("    }\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"php/{class_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
