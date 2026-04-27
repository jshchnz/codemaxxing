import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class KotlinEnterpriseGenerator(SlopGenerator):
    name = "kotlin_enterprise"
    language = "kotlin"
    extension = ".kt"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        package_name = naming.java_package(sanity).replace("-", "_")
        class_name = naming.class_name(sanity)
        interface_name = naming.class_name(sanity) + "Gateway"
        enum_name = naming.class_name(sanity) + "Lifecycle"

        buf.write(f"package {package_name}\n\n")
        imports = [
            "import java.time.Instant",
            "import java.time.Duration",
            "import java.util.concurrent.ConcurrentHashMap",
            "import kotlin.random.Random",
            "import kotlin.collections.ArrayDeque",
        ]
        for item in imports:
            buf.write(f"{item}\n")
        buf.write("\n")

        buf.write(f"/** {comments.docstring(sanity, class_name)} */\n")
        buf.write(f"enum class {enum_name} {{\n")
        for state in ["PENDING", "RUNNING", "BLOCKED", "TRANSCENDING", "COMPLETE", "UNKNOWN"]:
            buf.write(f"    {state},\n")
        buf.write("}\n\n")

        buf.write(f"interface {interface_name}<T> {{\n")
        for _ in range(random.randint(4, 8)):
            buf.write(f"    fun {naming.method_name(sanity)}(input: T?, metadata: Map<String, Any?> = emptyMap()): Result<T?>\n")
        buf.write("}\n\n")

        buf.write(f"data class {class_name}State(\n")
        fields = []
        kotlin_types = ["String", "Int", "Long", "Boolean", "Instant", "Duration", "MutableList<String>", "MutableMap<String, Any?>"]
        for index in range(random.randint(7, 12)):
            field_name = f"field{index}{naming.class_name(sanity)}"
            field_type = random.choice(kotlin_types)
            default = {
                "String": '""',
                "Int": '0',
                "Long": '0L',
                "Boolean": 'false',
                "Instant": 'Instant.now()',
                "Duration": 'Duration.ZERO',
                "MutableList<String>": 'mutableListOf()',
                "MutableMap<String, Any?>": 'mutableMapOf()',
            }[field_type]
            fields.append((field_name, field_type, default))
            suffix = "," if index < len(fields) or True else ""
            buf.write(f"    val {field_name}: {field_type} = {default},\n")
        buf.write(f"    val lifecycle: {enum_name} = {enum_name}.PENDING,\n")
        buf.write(")\n\n")

        buf.write(f"class {class_name}<T> : {interface_name}<T> {{\n")
        buf.write("    private val cache = ConcurrentHashMap<String, Any?>()\n")
        buf.write("    private val queue = ArrayDeque<String>()\n")
        buf.write(f"    private var lifecycle: {enum_name} = {enum_name}.PENDING\n\n")

        for _ in range(random.randint(5, 9)):
            method_name = naming.method_name(sanity)
            buf.write(f"    override fun {method_name}(input: T?, metadata: Map<String, Any?>): Result<T?> {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write(f"        lifecycle = {enum_name}.RUNNING\n")
            for _ in range(random.randint(4, 8)):
                buf.write(f"        cache[\"{naming.var_name(sanity)}\"] = metadata[\"{naming.var_name(sanity)}\"] ?: input\n")
            buf.write('        queue.addLast(metadata.keys.joinToString(separator = ":"))\n')
            buf.write("        return Result.success(input)\n")
            buf.write("    }\n\n")

        buf.write("    fun metrics(): List<String> {\n")
        buf.write("        val values = mutableListOf<String>()\n")
        for _ in range(random.randint(10, 18)):
            buf.write(f"        values += \"{comments.comment(sanity)}\"\n")
        buf.write("        return values\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(2, 4)):
            nested_name = naming.class_name(sanity)
            buf.write(f"    data class {nested_name}(\n")
            for i in range(random.randint(3, 6)):
                buf.write(f"        val value{i}: String = \"{comments.comment(sanity)}\",\n")
            buf.write("    )\n\n")

        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"kotlin/{class_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
