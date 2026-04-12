from .i_gioco import IGioco
from .i_factory_mossa_astratta import IFactoryMossaAstratta
from .i_strategia_vincitore import IStrategiaVincitore
from .gestore_punteggio import GestorePunteggio
from .i_logger import ILogger

class GiocoPrincipale(IGioco):
    def __init__(self,
                 factory_mossa: IFactoryMossaAstratta,
                 strategia: IStrategiaVincitore,
                 gestore_punteggio: GestorePunteggio,
                 logger: ILogger):
        self._factory = factory_mossa
        self._strategia = strategia
        self._gestore_punteggio = gestore_punteggio
        self._logger = logger

    def gioca_turno(self) -> None:
        self._logger.log("Inizio del turno.")

        m1 = self._factory.crea_casuale()
        m2 = self._factory.crea_casuale()

        self._logger.log(f"Giocatore 1 ha scelto {m1.get_nome()}.")
        self._logger.log(f"Giocatore 2 ha scelto {m2.get_nome()}.")

        risultato = self._strategia.calcola_vincitore(m1, m2)

        self._logger.log(f"Risultato: {risultato.get_messaggio()} (Vincitore: {risultato.get_vincitore()})")
        print(f"Risultato: {risultato.get_messaggio()}")

        vincitore = risultato.get_vincitore()
        if vincitore == "Giocatore 1":
            self._gestore_punteggio.aggiungi_punto_giocatore1()
        elif vincitore == "Giocatore 2":
            self._gestore_punteggio.aggiungi_punto_giocatore2()

        self._logger.log("Fine del turno.")
