import os
import subprocess
import sys
import time

from codemaxxing.config import GenerationConfig
from codemaxxing.generator import generate_batch, write_files
from codemaxxing.naming import commit_message
from codemaxxing.stats import Stats


def run_turbo(config: GenerationConfig):
    output_dir = os.path.abspath(config.output_dir)
    os.makedirs(output_dir, exist_ok=True)

    # check if we're in a git repo
    result = subprocess.run(
        ["git", "rev-parse", "--is-inside-work-tree"],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print("Error: not inside a git repository. Initialize one first.")
        print("  git init && git add -A && git commit -m 'init'")
        sys.exit(1)

    # create slop branch
    branch_name = f"slop/session-{int(time.time())}"
    subprocess.run(["git", "checkout", "-b", branch_name], capture_output=True)
    print(f"Created branch: {branch_name}")
    print(f"Target: {config.lines:,} lines | Sanity: {config.sanity:.0%} | Lang: {config.lang}")
    print(f"Output: {output_dir}")
    print()

    stats = Stats()
    file_index = 0
    batch_size = 15

    try:
        while stats.total_lines < config.lines:
            # generate batch
            files = generate_batch(config, batch_size, file_index)
            lines = write_files(files, output_dir)
            file_index += batch_size

            # git add and commit
            subprocess.run(
                ["git", "add", "-A"],
                capture_output=True
            )
            msg = commit_message(config.sanity, stats.total_commits + 1)
            subprocess.run(
                ["git", "commit", "-m", msg, "--allow-empty"],
                capture_output=True
            )

            stats.add(lines=lines, files=len(files), commits=1)

            # live display
            sys.stdout.write(stats.display())
            sys.stdout.flush()

    except KeyboardInterrupt:
        print("\n\nTurbo mode interrupted!")

    print(stats.summary())
