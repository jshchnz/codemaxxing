import random
from .i_factory_mossa_astratta import IFactoryMossaAstratta
from .i_mossa import IMossa
from .mossa_sasso import MossaSasso
from .mossa_carta import MossaCarta
from .mossa_forbici import MossaForbici

class FactoryMossaConcreta(IFactoryMossaAstratta):
    def crea_sasso(self) -> IMossa:
        return MossaSasso()

    def crea_carta(self) -> IMossa:
        return MossaCarta()

    def crea_forbici(self) -> IMossa:
        return MossaForbici()

    def crea_casuale(self) -> IMossa:
        scelta = random.choice([self.crea_sasso, self.crea_carta, self.crea_forbici])
        return scelta()
