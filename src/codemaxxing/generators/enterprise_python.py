import random
from io import StringIO

from codemaxxing.generators.base import SlopGenerator, GeneratedFile
from codemaxxing import naming, comments


class EnterprisePythonGenerator(SlopGenerator):
    name = "enterprise_python"
    language = "python"
    extension = ".py"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        cname = naming.class_name(sanity)
        module_name = cname.lower()

        # module docstring
        buf.write(f'"""\n{comments.docstring(sanity, cname)}\n\n')
        buf.write(f"This module provides the {cname} implementation\n")
        buf.write(f"for enterprise-grade workflow orchestration.\n")
        buf.write(f'"""\n\n')

        # imports
        stdlib_imports = [
            "from abc import ABC, abstractmethod",
            "from typing import Any, Optional, Union, Protocol, TypeVar, Generic",
            "from dataclasses import dataclass, field",
            "from functools import wraps, lru_cache",
            "from enum import Enum, auto",
            "import logging",
            "import sys",
            "import os",
            "from collections import defaultdict",
            "from contextlib import contextmanager",
        ]
        for imp in random.sample(stdlib_imports, random.randint(4, len(stdlib_imports))):
            buf.write(f"{imp}\n")
        buf.write("\n")

        # type aliases
        buf.write(f"T = TypeVar('T')\n")
        buf.write(f"U = TypeVar('U')\n")
        for _ in range(random.randint(2, 5)):
            alias_name = naming.class_name(sanity) + "Type"
            buf.write(f"{alias_name} = Union[dict[str, Any], list[Any], None]\n")
        buf.write("\n")
        buf.write(f"logger = logging.getLogger(__name__)\n\n")

        # metaclass
        meta_name = naming.class_name(sanity) + "Meta"
        buf.write(f"\nclass {meta_name}(type):\n")
        buf.write(f'    """{comments.docstring(sanity, meta_name)}"""\n\n')
        buf.write(f"    _instances: dict[type, Any] = {{}}\n\n")
        buf.write(f"    def __call__(cls, *args: Any, **kwargs: Any) -> Any:\n")
        buf.write(f"        if cls not in cls._instances:\n")
        buf.write(f"            cls._instances[cls] = super().__call__(*args, **kwargs)\n")
        buf.write(f"        return cls._instances[cls]\n\n")

        # abstract base class
        abc_name = "Abstract" + naming.class_name(sanity)
        buf.write(f"\nclass {abc_name}(ABC):\n")
        buf.write(f'    """{comments.docstring(sanity, abc_name)}"""\n\n')
        num_abstract = random.randint(3, 7)
        for _ in range(num_abstract):
            mname = naming.method_name(sanity)
            params = ", ".join(
                f"{naming.var_name(sanity)}: Any"
                for _ in range(random.randint(1, 4))
            )
            buf.write(f"    @abstractmethod\n")
            buf.write(f"    def {mname}(self, {params}) -> Any:\n")
            buf.write(f"        # {comments.comment(sanity)}\n")
            buf.write(f"        ...\n\n")

        # enum
        enum_name = naming.class_name(sanity) + "Status"
        buf.write(f"\nclass {enum_name}(Enum):\n")
        buf.write(f'    """{comments.docstring(sanity, enum_name)}"""\n\n')
        enum_values = ["PENDING", "ACTIVE", "PROCESSING", "VALIDATING", "TRANSFORMING",
                       "ORCHESTRATING", "DELEGATING", "RESOLVING", "FINALIZING", "COMPLETED",
                       "FAILED", "RETRYING", "CANCELLED", "DEPRECATED", "UNKNOWN",
                       "ASCENDING", "TRANSCENDING", "VIBING", "EXISTING"]
        for val in random.sample(enum_values, random.randint(6, min(15, len(enum_values)))):
            buf.write(f"    {val} = auto()\n")
        buf.write("\n")

        # concrete class
        buf.write(f"\nclass {cname}({abc_name}, metaclass={meta_name}):\n")
        buf.write(f'    """\n    {comments.docstring(sanity, cname)}\n\n')
        for line in comments.block_comment(sanity, "   "):
            buf.write(f"    {line}\n")
        buf.write(f'    """\n\n')

        # __init__ with many params
        num_params = random.randint(8, 15)
        params_list = [f"{naming.var_name(sanity)}: Any = None" for _ in range(num_params)]
        buf.write(f"    def __init__(\n")
        buf.write(f"        self,\n")
        for p in params_list:
            buf.write(f"        {p},\n")
        buf.write(f"    ) -> None:\n")
        buf.write(f'        """{comments.docstring(sanity, "__init__")}"""\n')
        for p in params_list:
            pname = p.split(":")[0]
            buf.write(f"        self._{pname} = {pname}\n")
        buf.write(f"        self._initialized = True\n")
        buf.write(f"        self._state = {enum_name}.PENDING\n")
        buf.write(f"        logger.info(f'Initialized {cname}')\n\n")

        # properties
        for p in params_list[:5]:
            pname = p.split(":")[0]
            buf.write(f"    @property\n")
            buf.write(f"    def {pname}(self) -> Any:\n")
            buf.write(f"        # {comments.comment(sanity)}\n")
            buf.write(f"        return self._{pname}\n\n")
            buf.write(f"    @{pname}.setter\n")
            buf.write(f"    def {pname}(self, value: Any) -> None:\n")
            buf.write(f"        self._{pname} = value\n\n")

        # implement abstract methods
        for _ in range(num_abstract):
            mname = naming.method_name(sanity)
            params = ", ".join(
                f"{naming.var_name(sanity)}: Any"
                for _ in range(random.randint(1, 3))
            )
            buf.write(f"    def {mname}(self, {params}) -> Any:\n")
            buf.write(f'        """{comments.docstring(sanity, mname)}"""\n')
            num_body = random.randint(3, 8)
            for _ in range(num_body):
                vname = naming.var_name(sanity)
                buf.write(f"        {vname} = None  # {comments.comment(sanity)}\n")
            buf.write(f"        return None\n\n")

        # factory classmethod
        buf.write(f"    @classmethod\n")
        buf.write(f"    def create(cls, **kwargs: Any) -> '{cname}':\n")
        buf.write(f'        """{comments.docstring(sanity, "create")}"""\n')
        buf.write(f"        return cls(**kwargs)\n\n")

        # context manager
        buf.write(f"    def __enter__(self) -> '{cname}':\n")
        buf.write(f"        self._state = {enum_name}.ACTIVE\n")
        buf.write(f"        return self\n\n")
        buf.write(f"    def __exit__(self, *args: Any) -> None:\n")
        buf.write(f"        self._state = {enum_name}.COMPLETED\n\n")

        # repr
        buf.write(f"    def __repr__(self) -> str:\n")
        buf.write(f"        return f'{cname}(state={{self._state}})'\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"python/{module_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
