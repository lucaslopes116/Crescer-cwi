import br.com.cwi.crescer.PortuguesEspanhol;
import br.com.cwi.crescer.PortuguesIngles;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortuguesEspanholTest {

    @Test
    void traduzirPortuguesParaOIngles() {

        PortuguesEspanhol portuguesEspanhol = new PortuguesEspanhol();

        String palavraTraduzida = portuguesEspanhol.traduzirPortuguesEspanhol("você diz sim eu digo não você diz pare e eu digo vai vai vai");
        assertEquals("usted dice sí yo digo no usted dice parar y yo digo va va va",palavraTraduzida);
    }
}