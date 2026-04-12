from abc import ABC, abstractmethod

class IOsservatorePunteggio(ABC):
    @abstractmethod
    def aggiorna(self, punteggio_giocatore1: int, punteggio_giocatore2: int) -> None:
        pass
