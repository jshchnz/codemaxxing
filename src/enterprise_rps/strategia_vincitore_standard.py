from .i_strategia_vincitore import IStrategiaVincitore
from .i_mossa import IMossa
from .i_risultato import IRisultato
from .risultato import Risultato

class StrategiaVincitoreStandard(IStrategiaVincitore):
    def calcola_vincitore(self, mossa_giocatore1: IMossa, mossa_giocatore2: IMossa) -> IRisultato:
        n1 = mossa_giocatore1.get_nome()
        n2 = mossa_giocatore2.get_nome()

        if n1 == n2:
            return Risultato("Pareggio", f"Entrambi hanno scelto {n1}.")

        vincite = {
            "Sasso": "Forbici",
            "Carta": "Sasso",
            "Forbici": "Carta"
        }

        if vincite[n1] == n2:
            return Risultato("Giocatore 1", f"{n1} batte {n2}.")
        else:
            return Risultato("Giocatore 2", f"{n2} batte {n1}.")
