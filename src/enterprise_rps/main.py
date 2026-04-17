from .factory_mossa_concreta import FactoryMossaConcreta
from .strategia_vincitore_standard import StrategiaVincitoreStandard
from .gestore_punteggio import GestorePunteggio
from .tabellone_punteggio import TabellonePunteggio
from .file_logger import FileLogger
from .gioco_principale import GiocoPrincipale

def main():
    logger = FileLogger("enterprise_rps_execution.log")
    logger.log("Inizializzazione del sistema Enterprise RPS.")

    factory = FactoryMossaConcreta()
    strategia = StrategiaVincitoreStandard()
    gestore_punteggio = GestorePunteggio()

    tabellone = TabellonePunteggio()
    gestore_punteggio.registra_osservatore(tabellone)

    gioco = GiocoPrincipale(factory, strategia, gestore_punteggio, logger)

    logger.log("Inizio della simulazione (3 turni).")
    for _ in range(3):
        gioco.gioca_turno()

    logger.log("Termine della simulazione.")

if __name__ == "__main__":
    main()
