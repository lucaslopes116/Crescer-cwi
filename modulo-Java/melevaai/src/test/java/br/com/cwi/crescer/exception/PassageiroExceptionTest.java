package br.com.cwi.crescer.exception;

import br.com.cwi.crescer.domain.CalculaIdade;
import br.com.cwi.crescer.domain.pessoa.Passageiro;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class PassageiroExceptionTest {

    @Test
    void passageiroComIdadeParaCarona() throws PassageiroException {

        Passageiro carona = new Passageiro();
        CalculaIdade calculadora = new CalculaIdade();

        calculadora.idade(carona.getDataNascimento());

        Assertions.assertTrue(carona.verificaIdade());
    }

    @Test
    void passageiroComIdadeImpropria() {

        Assertions.assertThrows(PassageiroException.class, () -> {
            Passageiro carona2 = new Passageiro();
        });
    }

}