import br.com.cwi.crescer.InglesEspanhol;

import br.com.cwi.crescer.PalavraNaoEncontradaException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class InglesEspanholTest {

    @Test
    public void TraduzInglesParaEspanhol() throws PalavraNaoEncontradaException {

        InglesEspanhol inglesEspanhol = new InglesEspanhol();

        String palavraTraduzida = inglesEspanhol.traduzirInglesEspanhol("you say yes i say no you say stop and i say go go go");
        assertEquals("usted dice sí yo dice no usted dice parar y yo dice va va va",palavraTraduzida);
    }


    }
