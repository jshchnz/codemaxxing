from abc import ABC, abstractmethod
from .i_mossa import IMossa

class IFactoryMossaAstratta(ABC):
    @abstractmethod
    def crea_sasso(self) -> IMossa:
        pass

    @abstractmethod
    def crea_carta(self) -> IMossa:
        pass

    @abstractmethod
    def crea_forbici(self) -> IMossa:
        pass

    @abstractmethod
    def crea_casuale(self) -> IMossa:
        pass
