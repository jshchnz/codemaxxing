import os
import random

from collections import defaultdict

from codemaxxing.config import GenerationConfig
from codemaxxing.generators import get_generators
from codemaxxing.generators.base import GeneratedFile, SlopGenerator


def _generator_sequence(
    generators: list[SlopGenerator],
    count: int,
    start_offset: int = 0,
) -> list[SlopGenerator]:
    if not generators or count <= 0:
        return []

    sequence: list[SlopGenerator] = []
    ordered = generators[:]
    rotation = start_offset % len(ordered)
    ordered = ordered[rotation:] + ordered[:rotation]

    while len(sequence) < count:
        if len(sequence) < len(ordered):
            sequence.append(ordered[len(sequence)])
        else:
            sequence.append(random.choice(generators))

    return sequence



def generate(config: GenerationConfig) -> list[GeneratedFile]:
    generators = get_generators(config.lang)
    files: list[GeneratedFile] = []
    total_lines = 0
    file_index = 0
    guaranteed = _generator_sequence(generators, len(generators))

    while total_lines < config.lines or guaranteed:
        gen = guaranteed.pop(0) if guaranteed else random.choice(generators)
        result = gen.generate(config.sanity, file_index)
        files.append(result)
        total_lines += result.line_count
        file_index += 1

    return files


def generate_batch(config: GenerationConfig, batch_size: int, start_index: int) -> list[GeneratedFile]:
    generators = get_generators(config.lang)
    files: list[GeneratedFile] = []
    sequence = _generator_sequence(generators, batch_size, start_index)

    for i, gen in enumerate(sequence):
        result = gen.generate(config.sanity, start_index + i)
        files.append(result)

    return files


def _write_manifest(files: list[GeneratedFile], output_dir: str, total_lines: int) -> None:
    by_language: dict[str, dict[str, int]] = defaultdict(lambda: {"files": 0, "lines": 0})
    for generated in files:
        language = generated.filename.split("/", 1)[0]
        by_language[language]["files"] += 1
        by_language[language]["lines"] += generated.line_count

    manifest_lines = [
        "# codemaxxing manifest",
        "",
        f"total files: {len(files)}",
        f"total lines: {total_lines}",
        "",
        "## language breakdown",
        "",
    ]
    for language in sorted(by_language):
        entry = by_language[language]
        manifest_lines.append(
            f"- {language}: {entry['files']} files / {entry['lines']} lines"
        )

    manifest_lines.extend([
        "",
        "## generated files",
        "",
    ])
    for generated in files:
        manifest_lines.append(f"- {generated.filename} ({generated.line_count} lines)")

    manifest_path = os.path.join(output_dir, "codemaxxing_manifest.md")
    with open(manifest_path, "w") as manifest:
        manifest.write("\n".join(manifest_lines) + "\n")



def write_files(files: list[GeneratedFile], output_dir: str) -> int:
    total_lines = 0
    for f in files:
        path = os.path.join(output_dir, f.filename)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as fh:
            fh.write(f.content)
        total_lines += f.line_count

    _write_manifest(files, output_dir, total_lines)
    return total_lines
