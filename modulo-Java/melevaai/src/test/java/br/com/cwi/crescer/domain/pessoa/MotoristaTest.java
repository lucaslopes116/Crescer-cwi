package br.com.cwi.crescer.domain.pessoa;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

class MotoristaTest {

    private Motorista motora;

    @BeforeEach
    void criaPassageiro() {

        motora = new Motorista();
        Motorista motora = new Motorista();
        CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
        cnh.setCategoria(CategoriaCnh.B);
        cnh.setNumeroDoDocumento("123132313");

        motora.setNome("Lucas Fernando");
        motora.setCarteiraDeHabilitacao(cnh);
        motora.setDataNascimento(LocalDate.of(1990,11,06));
        motora.setEmail("lucas@cwi.com.br");
        motora.setId(Long.valueOf(1));
    }

    @Test
    void verificaNomeMotorista() {

        Assertions.assertEquals("Lucas", motora.getNome());
    }

    @Test
    void verificaEmailMotorista() {

        Assertions.assertEquals("lucas@cwi.com.br", motora.getEmail());
    }

    @Test
    void verificaNascimentoMotorista() {

        Assertions.assertEquals(LocalDate.of(1990, 12, 12), motora.getDataNascimento());
    }

    @Test
    void verificaDocumentoCnhMotorista() {

        Assertions.assertEquals("123123331311", motora.getCarteiraDeHabilitacao().getNumeroDoDocumento());
    }

    @Test
    void verificaCategoriaCnhMotorista() {

        Assertions.assertEquals(CategoriaCnh.B, motora.getCarteiraDeHabilitacao().getCategoria());
    }


}