from abc import ABC, abstractmethod
from .i_mossa import IMossa
from .i_risultato import IRisultato

class IStrategiaVincitore(ABC):
    @abstractmethod
    def calcola_vincitore(self, mossa_giocatore1: IMossa, mossa_giocatore2: IMossa) -> IRisultato:
        pass
