import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class CSharpEnterpriseGenerator(SlopGenerator):
    name = "csharp_enterprise"
    language = "csharp"
    extension = ".cs"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        namespace_name = naming.class_name(sanity)
        class_name = naming.class_name(sanity)
        interface_name = "I" + naming.class_name(sanity)
        record_name = naming.class_name(sanity) + "Record"

        usings = [
            "using System;",
            "using System.Collections.Generic;",
            "using System.Collections.Concurrent;",
            "using System.Linq;",
            "using System.Threading;",
            "using System.Threading.Tasks;",
            "using System.Diagnostics;",
        ]
        for item in usings:
            buf.write(f"{item}\n")
        buf.write("\n")

        buf.write(f"namespace Codemaxxing.{namespace_name};\n\n")

        buf.write(f"/// <summary>{comments.docstring(sanity, class_name)}</summary>\n")
        buf.write(f"public interface {interface_name}\n{{\n")
        for _ in range(random.randint(5, 9)):
            buf.write(
                f"    Task<object?> {naming.class_name(sanity)}Async(object? input, CancellationToken cancellationToken);\n"
            )
        buf.write("}\n\n")

        buf.write(f"public sealed record {record_name}(string Name, int Version, bool Enabled);\n\n")

        buf.write(f"public sealed class {class_name} : {interface_name}\n{{\n")
        field_types = [
            "string", "int", "long", "bool", "DateTimeOffset", "TimeSpan",
            "List<string>", "Dictionary<string, object?>", "ConcurrentQueue<object?>",
            "ConcurrentDictionary<string, string>", "ActivitySource", "SemaphoreSlim",
        ]
        properties = []
        for _ in range(random.randint(8, 14)):
            field_type = random.choice(field_types)
            prop_name = naming.class_name(sanity)
            properties.append((field_type, prop_name))
            buf.write(f"    public {field_type} {prop_name} {{ get; set; }}\n")
        buf.write("\n")

        buf.write(f"    public {class_name}()\n    {{\n")
        for field_type, prop_name in properties:
            default_value = {
                "string": 'string.Empty',
                "int": '0',
                "long": '0L',
                "bool": 'false',
                "DateTimeOffset": 'DateTimeOffset.UtcNow',
                "TimeSpan": 'TimeSpan.Zero',
                "List<string>": 'new List<string>()',
                "Dictionary<string, object?>": 'new Dictionary<string, object?>()',
                "ConcurrentQueue<object?>": 'new ConcurrentQueue<object?>()',
                "ConcurrentDictionary<string, string>": 'new ConcurrentDictionary<string, string>()',
                "ActivitySource": f'new ActivitySource("{class_name}")',
                "SemaphoreSlim": 'new SemaphoreSlim(1, 1)',
            }[field_type]
            buf.write(f"        {prop_name} = {default_value};\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(6, 10)):
            method_name = naming.class_name(sanity) + "Async"
            buf.write(
                f"    public async Task<object?> {method_name}(object? input, CancellationToken cancellationToken)\n    {{\n"
            )
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write("        cancellationToken.ThrowIfCancellationRequested();\n")
            buf.write("        await Task.Yield();\n")
            for _ in range(random.randint(4, 9)):
                buf.write(f"        var {naming.var_name(sanity)} = input ?? new object();\n")
            buf.write("        return input;\n")
            buf.write("    }\n\n")

        for _ in range(random.randint(3, 6)):
            method_name = naming.class_name(sanity)
            buf.write(f"    public IEnumerable<string> {method_name}()\n    {{\n")
            for _ in range(random.randint(10, 18)):
                buf.write(f"        yield return \"{comments.comment(sanity)}\";\n")
            buf.write("    }\n\n")

        for _ in range(random.randint(2, 4)):
            nested_name = naming.class_name(sanity)
            buf.write(f"    public sealed class {nested_name}\n    {{\n")
            for _ in range(random.randint(4, 8)):
                buf.write(f"        public string {naming.class_name(sanity)} {{ get; init; }} = \"{comments.comment(sanity)}\";\n")
            buf.write("    }\n\n")

        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"csharp/{class_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
