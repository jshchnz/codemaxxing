import os
import random

from codemaxxing.config import GenerationConfig
from codemaxxing.generators import get_generators
from codemaxxing.generators.base import GeneratedFile


def generate(config: GenerationConfig) -> list[GeneratedFile]:
    generators = get_generators(config.lang)
    files: list[GeneratedFile] = []
    total_lines = 0
    file_index = 0

    while total_lines < config.lines:
        gen = random.choice(generators)
        result = gen.generate(config.sanity, file_index)
        files.append(result)
        total_lines += result.line_count
        file_index += 1

    return files


def generate_batch(config: GenerationConfig, batch_size: int, start_index: int) -> list[GeneratedFile]:
    generators = get_generators(config.lang)
    files: list[GeneratedFile] = []

    for i in range(batch_size):
        gen = random.choice(generators)
        result = gen.generate(config.sanity, start_index + i)
        files.append(result)

    return files


def write_files(files: list[GeneratedFile], output_dir: str) -> int:
    total_lines = 0
    for f in files:
        path = os.path.join(output_dir, f.filename)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as fh:
            fh.write(f.content)
        total_lines += f.line_count
    return total_lines
