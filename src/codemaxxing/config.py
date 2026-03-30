from dataclasses import dataclass


@dataclass
class GenerationConfig:
    lines: int = 10000
    sanity: float = 0.5  # 0.0 = full chaos, 1.0 = corporate cringe
    lang: str = "all"
    output_dir: str = "./output"
    turbo: bool = False
    enterprise: bool = False

    def __post_init__(self):
        self.sanity = max(0.0, min(1.0, self.sanity))
        if self.enterprise:
            self.lines *= 10
