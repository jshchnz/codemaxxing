import os
import subprocess
import sys
import time

from codemaxxing.config import GenerationConfig
from codemaxxing.generator import generate_batch, write_files
from codemaxxing.naming import commit_message
from codemaxxing.stats import Stats


def git_push(silent=True):
    result = subprocess.run(
        ["git", "push"],
        capture_output=True, text=True
    )
    if not silent and result.returncode != 0:
        print(f"\nPush failed: {result.stderr.strip()}")
    return result.returncode == 0


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

    # branch setup
    if config.branch:
        # use specified branch (for CI / --forever restarts)
        current = subprocess.run(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            capture_output=True, text=True
        ).stdout.strip()
        if current != config.branch:
            subprocess.run(["git", "checkout", "-B", config.branch], capture_output=True)
        branch_name = config.branch
    else:
        branch_name = f"slop/session-{int(time.time())}"
        subprocess.run(["git", "checkout", "-b", branch_name], capture_output=True)

    mode = "FOREVER" if config.forever else "TURBO"
    print(f"[{mode}] Branch: {branch_name}")
    print(f"[{mode}] Target: {'∞' if config.forever else f'{config.lines:,}'} lines | Sanity: {config.sanity:.0%} | Lang: {config.lang}")
    print(f"[{mode}] Batch: {config.batch_size} files/commit | Push every: {config.push_every or 'never'}")
    print(f"[{mode}] Output: {output_dir}")
    print()

    stats = Stats()
    file_index = 0
    commits_since_push = 0

    try:
        while config.forever or stats.total_lines < config.lines:
            # generate batch
            files = generate_batch(config, config.batch_size, file_index)
            lines = write_files(files, output_dir)
            file_index += config.batch_size

            # git add and commit
            subprocess.run(["git", "add", "-A"], capture_output=True)
            msg = commit_message(config.sanity, stats.total_commits + 1)
            subprocess.run(
                ["git", "commit", "-m", msg, "--allow-empty"],
                capture_output=True
            )

            stats.add(lines=lines, files=len(files), commits=1)
            commits_since_push += 1

            # auto-push
            if config.push_every and commits_since_push >= config.push_every:
                git_push()
                commits_since_push = 0

            # live display
            sys.stdout.write(stats.display(mode))
            sys.stdout.flush()

    except KeyboardInterrupt:
        print(f"\n\n{mode} mode interrupted!")

    # final push if we have unpushed commits
    if config.push_every and commits_since_push > 0:
        print("\nPushing remaining commits...")
        git_push(silent=False)

    print(stats.summary())
