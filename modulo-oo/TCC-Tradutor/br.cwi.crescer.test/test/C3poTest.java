import br.cwi.crescer.C3po;
import org.junit.jupiter.api.Test;


import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class C3poTest {



    @Test
    void recebeFraseEMontaMap() {

        C3po c3po = new C3po();
        c3po.preparaFraseKlingon("ghobe eh I");
        c3po.preparaFraseKlingon("jajvam eh V");
        c3po.preparaFraseKlingon("puchpae eh X");
        c3po.preparaFraseKlingon("quch eh L");
        

        assertNotNull(c3po.preparaFraseKlingon("quch eh L"));
    }

    @Test

    void testaRecebePerguntaEColocaEmUmArray(){
        C3po c3po = new C3po();
        List resultado = c3po.recebePergunta("quanto custa puchpae quch ghobe ghobe ?");
        assertNotNull(resultado);

    }

    @Test

    void testaSeMontaMapKlingon(){

        C3po c3po = new C3po();
        c3po.romano();
        c3po.preparaFraseKlingon("ghobe eh I");
        c3po.preparaFraseKlingon("jajvam eh V");
        c3po.preparaFraseKlingon("puchpae eh X");
        c3po.preparaFraseKlingon("quch eh L");

       Map mapRetornado = c3po.dicionarioKlingon(c3po.preparaFraseKlingon("quch eh L"));

        assertEquals("{jajvam =5, quch =50, puchpae =10, ghobe =1}",mapRetornado);
    }

    @Test

    void respondeComAresposta() {

        C3po c3po = new C3po();
        c3po.romano();
        c3po.preparaFraseKlingon("ghobe eh I");
        c3po.preparaFraseKlingon("jajvam eh V");
        c3po.preparaFraseKlingon("puchpae eh X");
        c3po.preparaFraseKlingon("quch eh L");
        c3po.dicionarioKlingon(c3po.preparaFraseKlingon("quch eh L"));

        String resposta = c3po.dizAResposta(c3po.recebePergunta("quanto custa puchpae quch ghobe ghobe ?"));

        assertEquals("puchpae quch ghobe ghobe eh 42", resposta);
    }
}