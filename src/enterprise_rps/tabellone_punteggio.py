from .i_osservatore_punteggio import IOsservatorePunteggio

class TabellonePunteggio(IOsservatorePunteggio):
    def aggiorna(self, punteggio_giocatore1: int, punteggio_giocatore2: int) -> None:
        print(f"[TABELLONE] Punteggio Attuale -> Giocatore 1: {punteggio_giocatore1} | Giocatore 2: {punteggio_giocatore2}")
