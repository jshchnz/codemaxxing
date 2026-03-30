from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class GeneratedFile:
    filename: str
    content: str
    line_count: int


class SlopGenerator(ABC):
    name: str
    language: str
    extension: str

    @abstractmethod
    def generate(self, sanity: float, file_index: int) -> GeneratedFile:
        ...
