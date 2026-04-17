from abc import ABC, abstractmethod

class IRisultato(ABC):
    @abstractmethod
    def get_vincitore(self) -> str:
        pass

    @abstractmethod
    def get_messaggio(self) -> str:
        pass
