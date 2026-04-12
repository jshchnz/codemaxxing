from .i_soggetto_punteggio import ISoggettoPunteggio
from .i_osservatore_punteggio import IOsservatorePunteggio
from typing import List

class GestorePunteggio(ISoggettoPunteggio):
    def __init__(self):
        self._osservatori: List[IOsservatorePunteggio] = []
        self._punti_g1 = 0
        self._punti_g2 = 0

    def registra_osservatore(self, osservatore: IOsservatorePunteggio) -> None:
        self._osservatori.append(osservatore)

    def rimuovi_osservatore(self, osservatore: IOsservatorePunteggio) -> None:
        self._osservatori.remove(osservatore)

    def notifica_osservatori(self) -> None:
        for obs in self._osservatori:
            obs.aggiorna(self._punti_g1, self._punti_g2)

    def aggiungi_punto_giocatore1(self) -> None:
        self._punti_g1 += 1
        self.notifica_osservatori()

    def aggiungi_punto_giocatore2(self) -> None:
        self._punti_g2 += 1
        self.notifica_osservatori()
