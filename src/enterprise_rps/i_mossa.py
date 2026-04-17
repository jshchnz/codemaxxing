from abc import ABC, abstractmethod

class IMossa(ABC):
    @abstractmethod
    def get_nome(self) -> str:
        pass
