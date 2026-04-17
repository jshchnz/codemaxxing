from abc import ABC, abstractmethod

class IGioco(ABC):
    @abstractmethod
    def gioca_turno(self) -> None:
        pass
