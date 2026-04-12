from abc import ABC, abstractmethod
from .i_osservatore_punteggio import IOsservatorePunteggio

class ISoggettoPunteggio(ABC):
    @abstractmethod
    def registra_osservatore(self, osservatore: IOsservatorePunteggio) -> None:
        pass

    @abstractmethod
    def rimuovi_osservatore(self, osservatore: IOsservatorePunteggio) -> None:
        pass

    @abstractmethod
    def notifica_osservatori(self) -> None:
        pass
