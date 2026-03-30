from dataclasses import dataclass


@dataclass
class GenerationConfig:
    lines: int = 10000
    sanity: float = 0.5  # 0.0 = full chaos, 1.0 = corporate cringe
    lang: str = "all"
    output_dir: str = "./output"
    turbo: bool = False
    enterprise: bool = False
    batch_size: int = 15
    push_every: int = 0  # auto-push every N commits (0 = never)
    forever: bool = False  # run indefinitely
    branch: str = ""  # use existing branch instead of creating new one

    def __post_init__(self):
        self.sanity = max(0.0, min(1.0, self.sanity))
        if self.enterprise:
            self.lines *= 10
