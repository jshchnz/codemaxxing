import random

CORPORATE_COMMENTS = [
    "This method handles the core business logic for the enterprise workflow.",
    "DO NOT MODIFY - This is load-bearing architecture.",
    "Implements the AbstractFactory pattern for maximum extensibility.",
    "This class follows the Single Responsibility Principle (it has one responsibility: being enormous).",
    "TODO: Refactor this in Q3 (written in 2019).",
    "Per the architecture review board decision ARB-2847.",
    "This satisfies requirement REQ-ENTERPRISE-4392.",
    "Optimized for enterprise-grade throughput.",
    "Thread-safe implementation using the double-checked locking pattern.",
    "This is a critical path component - do not remove without VP approval.",
    "Legacy code - here be dragons.",
    "Reviewed and approved by the Technical Steering Committee.",
    "This abstraction layer provides necessary indirection for future scalability.",
    "Conforms to ISO 27001 compliance requirements.",
    "Part of the microservice decomposition initiative (Phase 7 of 12).",
    "This was the simplest solution after 6 months of design review.",
    "The previous implementation was 3 lines but didn't meet enterprise standards.",
]

CHAOS_COMMENTS = [
    "i dont know what this does but removing it breaks everything",
    "TODO: figure out why this works",
    "written at 3am, mass forgive me",
    "if you're reading this, turn back now",
    "this function is cursed",
    "DO NOT TOUCH - last person who modified this quit",
    "¯\\_(ツ)_/¯",
    "works on my machine ™",
    "the compiler demanded a blood sacrifice and this was it",
    "i asked chatgpt to write this and even it said no",
    "no tests needed, it's perfect (copium)",
    "this is load-bearing spaghetti",
    "abandon all hope ye who enter here",
    "the code is documentation enough (it is not)",
    "if this breaks, blame the intern (there is no intern)",
    "certified bruh moment",
    "vibe coded, do not question",
    "i will mass NOT be explaining this in the PR",
    "skill issue if you can't read this",
    "past me was a different person and i dont trust them",
    "this violates at least 3 design patterns and invents 2 new ones",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "the mass of code grows. it hungers. it consumes.",
]

CORPORATE_DOCSTRINGS = [
    "Initializes the {name} with the specified configuration parameters.",
    "Processes the incoming request through the validation pipeline.",
    "Transforms the input data according to the business rules engine.",
    "Orchestrates the workflow execution across distributed service boundaries.",
    "Delegates to the underlying implementation for concrete behavior.",
    "Resolves dependencies through the inversion of control container.",
    "Validates the state transition according to the finite state machine definition.",
]

CHAOS_DOCSTRINGS = [
    "dont ask me what this does because i genuinely do not know",
    "this function exists because someone said 'just add a wrapper'",
    "returns something. probably.",
    "args: stuff. returns: other stuff. raises: your blood pressure.",
    "TL;DR: it do be doing things tho",
    "side effects: may cause existential dread",
    "complexity: O(vibes)",
    "deprecated since mass birth but still called in 47 places",
]


def comment(sanity: float) -> str:
    if random.random() < sanity:
        return random.choice(CORPORATE_COMMENTS)
    return random.choice(CHAOS_COMMENTS)


def docstring(sanity: float, name: str = "component") -> str:
    if random.random() < sanity:
        return random.choice(CORPORATE_DOCSTRINGS).format(name=name)
    return random.choice(CHAOS_DOCSTRINGS)


def block_comment(sanity: float, style: str = "//") -> list[str]:
    lines = []
    num_lines = random.randint(2, 6)
    for _ in range(num_lines):
        lines.append(f"{style} {comment(sanity)}")
    return lines
