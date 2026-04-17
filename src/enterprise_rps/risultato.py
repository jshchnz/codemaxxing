from .i_risultato import IRisultato

class Risultato(IRisultato):
    def __init__(self, vincitore: str, messaggio: str):
        self._vincitore = vincitore
        self._messaggio = messaggio

    def get_vincitore(self) -> str:
        return self._vincitore

    def get_messaggio(self) -> str:
        return self._messaggio
