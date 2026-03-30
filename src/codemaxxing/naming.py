import random

CORPORATE_PREFIXES = [
    "Abstract", "Base", "Default", "Internal", "Core", "Enhanced", "Optimized",
    "Legacy", "Modern", "Enterprise", "Cloud", "Distributed", "Scalable",
    "Dynamic", "Static", "Global", "Local", "Custom", "Generic", "Standard",
]

CORPORATE_NOUNS = [
    "Singleton", "Factory", "Builder", "Proxy", "Adapter", "Decorator",
    "Observer", "Strategy", "Command", "Mediator", "Facade", "Bridge",
    "Composite", "Iterator", "Visitor", "Prototype", "Flyweight", "Chain",
    "Handler", "Service", "Manager", "Controller", "Repository", "Provider",
    "Orchestrator", "Coordinator", "Validator", "Transformer", "Resolver",
    "Dispatcher", "Interceptor", "Aggregator", "Processor", "Pipeline",
    "Delegate", "Registry", "Configurator", "Initializer", "Serializer",
    "Deserializer", "Converter", "Mapper", "Wrapper", "Connector",
    "Bean", "Module", "Component", "Endpoint", "Gateway", "Middleware",
]

CORPORATE_SUFFIXES = [
    "Impl", "Base", "Abstract", "Interface", "Helper", "Util", "Utils",
    "Config", "Context", "State", "Result", "Response", "Request",
    "Exception", "Error", "Type", "Kind", "Spec", "Definition", "Descriptor",
    "Info", "Data", "Model", "Entity", "Record", "Value", "Pair",
]

CHAOS_WORDS = [
    "Skibidi", "Ligma", "Yeet", "Bruh", "Sigma", "Rizz", "Gyatt",
    "Bussin", "NoCap", "Sus", "Slay", "Vibe", "Ohio", "Fanum",
    "Griddy", "Mewing", "Edging", "Gooning", "Aura", "Delulu",
    "Sussy", "Baka", "Poggers", "Copium", "Hopium", "Malding",
    "Gigachad", "Based", "Cringe", "Ratio", "Deadass", "Noob",
    "Chungus", "Dank", "Stonks", "Bonk", "Oof", "Yoink", "Sheesh",
    "Drip", "Glizzy", "Goated", "Slaps", "Hits", "Bussin",
    "xX_Destroyer_Xx", "L_plus_ratio", "skill_issue", "no_bitches",
]

CHAOS_PREFIXES = [
    "Ultra", "Mega", "Giga", "Hyper", "Super", "Turbo", "Maximum",
    "Extreme", "Absolute", "Total", "Final", "Ultimate", "Supreme",
    "Legendary", "Mythical", "Ascended", "Transcendent", "Omega",
]

CORPORATE_METHODS = [
    "process", "handle", "execute", "validate", "transform", "convert",
    "initialize", "configure", "register", "resolve", "dispatch", "notify",
    "aggregate", "compute", "evaluate", "serialize", "deserialize", "parse",
    "render", "build", "create", "destroy", "update", "delete", "fetch",
    "load", "save", "persist", "cache", "invalidate", "refresh", "sync",
    "authenticate", "authorize", "encrypt", "decrypt", "compress", "decompress",
    "normalize", "denormalize", "sanitize", "format", "marshal", "unmarshal",
]

CHAOS_METHODS = [
    "yeet", "yoink", "vibe_check", "rizz_up", "no_cap", "bussin_fr",
    "do_the_thing", "idk_what_this_does", "please_work", "trust_me_bro",
    "todo_fix_later", "hack_around_it", "ship_it", "lgtm", "works_on_my_machine",
    "dont_touch_this", "here_be_dragons", "abandon_all_hope", "cry",
    "pray_to_the_machine_spirit", "sacrifice_to_the_compiler", "cope",
    "seethe", "mald", "touch_grass", "go_outside",
]

CORPORATE_VARS = [
    "result", "value", "data", "response", "request", "context", "config",
    "state", "status", "count", "index", "item", "element", "node",
    "entity", "record", "entry", "instance", "reference", "target",
    "source", "destination", "input_data", "output_data", "buffer",
    "cache_entry", "metadata", "payload", "params", "options", "settings",
]

CHAOS_VARS = [
    "thingy", "stuff", "whatever", "idk", "bruh", "x", "xx", "xxx",
    "temp_but_permanent", "this_shouldnt_work", "magic_number",
    "dont_ask", "legacy_pain", "tech_debt", "god_object", "spaghetti",
    "yolo_var", "fix_me_please", "cursed_value", "forbidden_knowledge",
    "the_darkness", "eldritch_data", "haunted_reference", "it_lives",
]


def _blend(corporate_list: list[str], chaos_list: list[str], sanity: float) -> str:
    if random.random() < sanity:
        return random.choice(corporate_list)
    return random.choice(chaos_list)


def class_name(sanity: float) -> str:
    parts = []
    num_parts = random.randint(2, 4) if sanity > 0.5 else random.randint(1, 3)
    if random.random() < sanity:
        parts.append(random.choice(CORPORATE_PREFIXES))
    for _ in range(num_parts):
        parts.append(_blend(CORPORATE_NOUNS, CHAOS_WORDS, sanity))
    if random.random() < sanity * 0.7:
        parts.append(random.choice(CORPORATE_SUFFIXES))
    return "".join(parts)


def method_name(sanity: float) -> str:
    return _blend(CORPORATE_METHODS, CHAOS_METHODS, sanity)


def var_name(sanity: float) -> str:
    return _blend(CORPORATE_VARS, CHAOS_VARS, sanity)


def java_package(sanity: float) -> str:
    if sanity > 0.5:
        domains = ["com", "org", "io", "net"]
        companies = ["enterprise", "megacorp", "synergy", "cloudscale", "dataflow"]
        modules = ["core", "service", "util", "framework", "platform", "engine"]
        return f"{random.choice(domains)}.{random.choice(companies)}.{random.choice(modules)}"
    else:
        return f"com.{random.choice(CHAOS_WORDS).lower()}.{random.choice(CHAOS_WORDS).lower()}"


def go_package(sanity: float) -> str:
    if sanity > 0.5:
        return random.choice(["service", "handler", "middleware", "repository", "controller", "util"])
    return random.choice(["yeet", "bruh", "skibidi", "sus", "ohio", "rizz"])


def commit_message(sanity: float, commit_num: int) -> str:
    corporate_messages = [
        "refactor(core): extract AbstractFactoryProvider into dedicated module",
        "feat(auth): implement singleton proxy delegation layer",
        "chore: update dependency injection configuration",
        "fix(service): resolve race condition in concurrent handler pool",
        "perf: optimize AbstractBeanFactoryManagerImpl initialization",
        "refactor: consolidate redundant orchestration middleware layers",
        "feat(api): add enterprise-grade validation pipeline",
        "chore(build): update artifact deployment configuration",
        "fix: correct edge case in distributed state synchronization",
        "refactor(patterns): migrate to AbstractStrategyVisitorBridge",
        "feat: implement cloud-native microservice mesh controller",
        "docs: update architecture decision records for Q4 initiative",
    ]

    chaos_messages = [
        "yolo",
        "i have no idea what this does",
        "please mass of code, you WILL compile",
        f"skibidi commit #{commit_num}",
        "bruh",
        "trust me bro",
        "it works on my machine",
        "LGTM",
        "shipped",
        "oops",
        "aaaaaaaaaaa",
        "no thoughts head empty",
        "vibe coded this",
        "the voices told me to commit",
        "if you're reading this, i'm sorry",
        "TODO: understand what any of this does",
        f"commit {commit_num} of mass pain",
        "added more lines because more is better",
        "i am mass of code. i am inevitable.",
        "this is fine 🔥",
    ]

    return _blend(corporate_messages, chaos_messages, sanity)
