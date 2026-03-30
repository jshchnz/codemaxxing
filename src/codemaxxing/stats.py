import time


class Stats:
    def __init__(self):
        self.start_time = time.time()
        self.total_lines = 0
        self.total_commits = 0
        self.total_files = 0

    def add(self, lines: int, files: int, commits: int = 0):
        self.total_lines += lines
        self.total_files += files
        self.total_commits += commits

    @property
    def elapsed(self) -> float:
        return time.time() - self.start_time

    @property
    def elapsed_str(self) -> str:
        e = int(self.elapsed)
        h, m, s = e // 3600, (e % 3600) // 60, e % 60
        return f"{h:02d}:{m:02d}:{s:02d}"

    @property
    def lines_per_sec(self) -> float:
        e = self.elapsed
        return self.total_lines / e if e > 0 else 0

    @property
    def commits_per_min(self) -> float:
        e = self.elapsed / 60
        return self.total_commits / e if e > 0 else 0

    def display(self, mode: str = "TURBO") -> str:
        return (
            f"\r[{mode}] {self.total_lines:,} lines | "
            f"{self.total_commits:,} commits | "
            f"{self.total_files:,} files | "
            f"{self.lines_per_sec:,.0f} lines/sec | "
            f"{self.commits_per_min:.1f} commits/min | "
            f"{self.elapsed_str} elapsed"
        )

    def summary(self) -> str:
        return (
            f"\n{'='*60}\n"
            f"  CODEMAXXING SESSION COMPLETE\n"
            f"{'='*60}\n"
            f"  Total lines:   {self.total_lines:>12,}\n"
            f"  Total files:   {self.total_files:>12,}\n"
            f"  Total commits: {self.total_commits:>12,}\n"
            f"  Duration:      {self.elapsed_str:>12}\n"
            f"  Lines/sec:     {self.lines_per_sec:>12,.0f}\n"
            f"  Commits/min:   {self.commits_per_min:>12.1f}\n"
            f"{'='*60}\n"
        )
