import random
from io import StringIO

from codemaxxing.generators.base import GeneratedFile, SlopGenerator
from codemaxxing import comments, naming


class RustEnterpriseGenerator(SlopGenerator):
    name = "rust_enterprise"
    language = "rust"
    extension = ".rs"

    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        buf = StringIO()
        module_name = naming.class_name(sanity)
        struct_name = naming.class_name(sanity)
        enum_name = naming.class_name(sanity) + "State"
        trait_name = naming.class_name(sanity) + "Operations"

        buf.write(f"//! {comments.docstring(sanity, module_name)}\n")
        for _ in range(random.randint(2, 5)):
            buf.write(f"//! {comments.comment(sanity)}\n")
        buf.write("\n")

        imports = [
            "use std::collections::{BTreeMap, HashMap, VecDeque};",
            "use std::fmt::{Debug, Display};",
            "use std::sync::{Arc, Mutex, RwLock};",
            "use std::time::{Duration, SystemTime};",
            "use std::marker::PhantomData;",
            "use std::error::Error;",
        ]
        for imp in random.sample(imports, random.randint(3, len(imports))):
            buf.write(f"{imp}\n")
        buf.write("\n")

        buf.write(f"pub type {naming.class_name(sanity)}Alias = HashMap<String, String>;\n")
        buf.write(f"pub type {naming.class_name(sanity)}Queue<T> = VecDeque<Option<T>>;\n\n")

        buf.write("#[derive(Debug, Clone, Default)]\n")
        buf.write(f"pub enum {enum_name} {{\n")
        states = [
            "Pending", "Initializing", "Validating", "Materializing", "Hydrating",
            "Delegating", "Synchronizing", "Finalizing", "Completed", "Deprecated",
        ]
        for state in states:
            prefix = "#[default]\n    " if state == "Pending" else "    "
            buf.write(f"{prefix}{state},\n")
        buf.write("}\n\n")

        buf.write(f"pub trait {trait_name}<T>: Send + Sync {{\n")
        for _ in range(random.randint(4, 8)):
            method_name = naming.method_name(sanity)
            buf.write(
                f"    fn {method_name}(&self, input: Option<T>) -> Result<Option<T>, Box<dyn Error>>;\n"
            )
        buf.write("}\n\n")

        buf.write("#[derive(Debug, Clone)]\n")
        buf.write(f"pub struct {struct_name}<T> {{\n")
        field_types = [
            "String", "usize", "bool", "Duration", "SystemTime", "Vec<String>",
            "HashMap<String, String>", "BTreeMap<String, usize>", "Arc<Mutex<Vec<String>>>",
            "Arc<RwLock<HashMap<String, String>>>", "Option<T>", "PhantomData<T>",
        ]
        for _ in range(random.randint(8, 14)):
            buf.write(f"    pub {naming.var_name(sanity)}: {random.choice(field_types)},\n")
        buf.write(f"    pub state: {enum_name},\n")
        buf.write("}\n\n")

        buf.write(f"impl<T> Default for {struct_name}<T> {{\n")
        buf.write("    fn default() -> Self {\n")
        buf.write("        Self::new()\n")
        buf.write("    }\n")
        buf.write("}\n\n")

        buf.write(f"impl<T: Clone + Debug> {struct_name}<T> {{\n")
        buf.write("    pub fn new() -> Self {\n")
        buf.write(f"        Self {{\n")
        init_lines = [
            "String::from(\"enterprise\")",
            "0",
            "false",
            "Duration::from_secs(0)",
            "SystemTime::now()",
            "Vec::new()",
            "HashMap::new()",
            "BTreeMap::new()",
            "Arc::new(Mutex::new(Vec::new()))",
            "Arc::new(RwLock::new(HashMap::new()))",
            "None",
            "PhantomData",
        ]
        for _ in range(random.randint(8, 14)):
            buf.write(f"            {naming.var_name(sanity)}: {random.choice(init_lines)},\n")
        buf.write(f"            state: {enum_name}::Pending,\n")
        buf.write("        }\n")
        buf.write("    }\n\n")

        for _ in range(random.randint(5, 9)):
            method_name = naming.method_name(sanity)
            buf.write(f"    pub fn {method_name}(&mut self, payload: Option<T>) -> Result<Option<T>, String> {{\n")
            buf.write(f"        // {comments.comment(sanity)}\n")
            buf.write(f"        self.state = {enum_name}::Synchronizing;\n")
            for _ in range(random.randint(3, 7)):
                local_name = naming.var_name(sanity)
                buf.write(f"        let {local_name} = payload.clone();\n")
                buf.write(f"        let _ = &{local_name};\n")
            buf.write("        if payload.is_none() {\n")
            buf.write(f"            self.state = {enum_name}::Validating;\n")
            buf.write("            return Ok(None);\n")
            buf.write("        }\n")
            buf.write(f"        self.state = {enum_name}::Completed;\n")
            buf.write("        Ok(payload)\n")
            buf.write("    }\n\n")

        buf.write("    pub fn emit_metrics(&self) -> Vec<String> {\n")
        buf.write("        let mut metrics = Vec::new();\n")
        for _ in range(random.randint(8, 16)):
            buf.write(f"        metrics.push(String::from(\"{comments.comment(sanity)}\"));\n")
        buf.write("        metrics\n")
        buf.write("    }\n")
        buf.write("}\n\n")

        buf.write(f"impl<T: Clone + Debug> {trait_name}<T> for {struct_name}<T> {{\n")
        for _ in range(random.randint(4, 6)):
            method_name = naming.method_name(sanity)
            buf.write(
                f"    fn {method_name}(&self, input: Option<T>) -> Result<Option<T>, Box<dyn Error>> {{\n"
            )
            buf.write(f"        let _telemetry = \"{comments.comment(sanity)}\";\n")
            buf.write("        Ok(input)\n")
            buf.write("    }\n\n")
        buf.write("}\n")

        content = buf.getvalue()
        line_count = content.count("\n")
        filename = f"rust/{module_name.lower()}_{file_index}{self.extension}"
        return GeneratedFile(filename=filename, content=content, line_count=line_count)
