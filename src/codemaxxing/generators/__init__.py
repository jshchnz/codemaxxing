from codemaxxing.generators.enterprise_java import EnterpriseJavaGenerator
from codemaxxing.generators.enterprise_python import EnterprisePythonGenerator
from codemaxxing.generators.javascript import JavaScriptGenerator
from codemaxxing.generators.go_slop import GoSlopGenerator
from codemaxxing.generators.generic import GenericGenerator

ALL_GENERATORS = [
    EnterpriseJavaGenerator(),
    EnterprisePythonGenerator(),
    JavaScriptGenerator(),
    GoSlopGenerator(),
    GenericGenerator(),
]

LANG_MAP = {
    "java": [EnterpriseJavaGenerator()],
    "python": [EnterprisePythonGenerator()],
    "js": [JavaScriptGenerator()],
    "javascript": [JavaScriptGenerator()],
    "go": [GoSlopGenerator()],
    "generic": [GenericGenerator()],
    "all": ALL_GENERATORS,
}


def get_generators(lang: str) -> list:
    return LANG_MAP.get(lang, ALL_GENERATORS)
