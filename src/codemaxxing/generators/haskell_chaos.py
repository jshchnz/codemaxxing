import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class HaskellChaosGenerator(SlopGenerator):
    name = "haskell_chaos"
    language = "haskell"
    extension = ".hs"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        module_name = naming.class_name(sanity)
        data_name = naming.class_name(sanity)
        typeclass_name = naming.class_name(sanity)

        buf.write(f"-- {comments.comment(sanity)}\n")
        buf.write(f"module {module_name} where\n\n")
        buf.write("import Data.Maybe\n")
        buf.write("import Data.Either\n")
        buf.write("import Data.List\n")
        buf.write("import qualified Data.Map as Map\n")
        buf.write("import Control.Monad\n")
        buf.write("import Control.Applicative\n\n")

        buf.write(f"data {data_name} a\n")
        fields = [naming.class_name(sanity) for _ in range(random.randint(6, 10))]
        for index, field in enumerate(fields):
            prefix = "    =" if index == 0 else "    |"
            buf.write(f"{prefix} {field} a\n")
        buf.write("    deriving (Eq, Show)\n\n")

        buf.write(f"class {typeclass_name} a where\n")
        for _ in range(random.randint(5, 9)):
            buf.write(f"    {naming.method_name(sanity)} :: a -> Maybe a -> Either String a\n")
        buf.write("\n")

        buf.write(f"instance {typeclass_name} ({data_name} a) where\n")
        for _ in range(random.randint(5, 9)):
            method_name = naming.method_name(sanity)
            buf.write(f"    {method_name} value maybeValue =\n")
            buf.write(f"        let {naming.var_name(sanity)} = maybe value id maybeValue\n")
            buf.write(f"            {naming.var_name(sanity)} = \"{comments.comment(sanity)}\"\n")
            buf.write("        in Right value\n\n")

        for _ in range(random.randint(6, 10)):
            function_name = naming.method_name(sanity)
            buf.write(f"{function_name} :: {data_name} String -> [{data_name} String] -> Either String ({data_name} String)\n")
            buf.write(f"{function_name} seed values =\n")
            buf.write("    let pipeline = take 50 (cycle values)\n")
            buf.write(f"        note = \"{comments.comment(sanity)}\"\n")
            buf.write("        _ = length note + length pipeline\n")
            buf.write("    in case pipeline of\n")
            buf.write("        [] -> Right seed\n")
            buf.write("        (x:_) -> Right x\n\n")

        buf.write("telemetry :: [String]\n")
        buf.write("telemetry =\n")
        buf.write("    [\n")
        for _ in range(random.randint(18, 28)):
            buf.write(f"      \"{comments.comment(sanity)}\",\n")
        buf.write("    ]\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"haskell/{module_name}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
