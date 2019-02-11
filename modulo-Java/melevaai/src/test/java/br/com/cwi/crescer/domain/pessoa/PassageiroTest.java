package br.com.cwi.crescer.domain.pessoa;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

class PassageiroTest {

    private Passageiro carona;

    @BeforeEach
    void criaPassageiro() {

        carona = new Passageiro();
        carona.setNome("Gilberto Zé");
        carona.setDataNascimento(LocalDate.of(1990,11,06));
        carona.setEmail("gilberto@cwi.com.br");
        carona.setId(Long.valueOf(1));
    }

    @Test
    void verificaNomePassageiro() {

        Assertions.assertEquals("Gilberto", carona.getNome());
    }

    @Test
    void verificaEmailPassageiro() {

        Assertions.assertEquals("gilberto@cwi.com.br", carona.getEmail());
    }

    @Test
    void verificaNascimentoPassageiro() {

        Assertions.assertEquals(LocalDate.of(1990, 12, 12), carona.getDataNascimento());
    }


}