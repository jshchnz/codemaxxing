import argparse

from codemaxxing.config import GenerationConfig


def main():
    parser = argparse.ArgumentParser(
        prog="codemaxxing",
        description="Maximize your lines of code. Because quantity IS quality.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "examples:\n"
            "  codemaxxing --lines 10000 --sanity 100\n"
            "  codemaxxing --lines 50000 --sanity 0 --lang java\n"
            "  codemaxxing --lines 100000 --turbo --sanity 50\n"
            "  codemaxxing --lines 1000 --enterprise\n"
            "  codemaxxing --turbo --forever --push-every 50 --batch-size 30\n"
            "  codemaxxing --turbo --forever --branch main --push-every 100\n"
        ),
    )

    parser.add_argument(
        "--lines", type=int, default=10000,
        help="Target number of lines to generate (default: 10000)",
    )
    parser.add_argument(
        "--sanity", type=int, default=50, choices=range(0, 101),
        metavar="0-100",
        help="Chaos level. 100=corporate cringe, 0=full unhinged (default: 50)",
    )
    parser.add_argument(
        "--lang", type=str, default="all",
        choices=["all", "java", "python", "js", "javascript", "go", "generic"],
        help="Target language(s) for generated slop (default: all)",
    )
    parser.add_argument(
        "--output", type=str, default="./output",
        help="Output directory (default: ./output)",
    )
    parser.add_argument(
        "--turbo", action="store_true",
        help="Turbo mode: generate -> git add -> commit -> repeat",
    )
    parser.add_argument(
        "--enterprise", action="store_true",
        help="Enterprise mode: 10x line multiplier because enterprise",
    )
    parser.add_argument(
        "--batch-size", type=int, default=15,
        help="Files per commit in turbo mode (default: 15, higher = more lines/commit)",
    )
    parser.add_argument(
        "--push-every", type=int, default=0,
        help="Auto-push every N commits (default: 0 = manual push)",
    )
    parser.add_argument(
        "--forever", action="store_true",
        help="Run indefinitely until interrupted (ignores --lines)",
    )
    parser.add_argument(
        "--branch", type=str, default="",
        help="Use this branch instead of creating slop/session-* (useful for CI)",
    )

    args = parser.parse_args()

    config = GenerationConfig(
        lines=args.lines,
        sanity=args.sanity / 100.0,
        lang=args.lang,
        output_dir=args.output,
        turbo=args.turbo,
        enterprise=args.enterprise,
        batch_size=args.batch_size,
        push_every=args.push_every,
        forever=args.forever,
        branch=args.branch,
    )

    if config.turbo:
        from codemaxxing.turbo import run_turbo
        run_turbo(config)
    else:
        from codemaxxing.generator import generate, write_files
        print(f"Generating {config.lines:,} lines of pure slop...")
        print(f"Sanity: {config.sanity:.0%} | Lang: {config.lang} | Output: {config.output_dir}")
        print()

        files = generate(config)
        total = write_files(files, config.output_dir)

        print(f"Done! Generated {total:,} lines across {len(files)} files.")
        print(f"Output: {config.output_dir}/")


if __name__ == "__main__":
    main()
