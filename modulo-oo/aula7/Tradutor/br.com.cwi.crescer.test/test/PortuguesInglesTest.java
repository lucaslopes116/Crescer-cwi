import br.com.cwi.crescer.PortuguesIngles;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortuguesInglesTest {

    @Test
    void traduzirPortuguesParaOIngles() {

        PortuguesIngles portuguesIngles = new PortuguesIngles();

        String palavraTraduzida = portuguesIngles.traduzirPortuguesIngles("você diz sim eu digo não você diz pare e eu digo vai vai vai");
        assertEquals("you say yes i say no you say stop and i say go go go",palavraTraduzida);
    }


}