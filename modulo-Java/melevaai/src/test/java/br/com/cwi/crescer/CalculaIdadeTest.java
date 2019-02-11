package br.com.cwi.crescer;

import br.com.cwi.crescer.domain.CalculaIdade;
import br.com.cwi.crescer.domain.pessoa.CarteiraDeHabilitacao;
import br.com.cwi.crescer.domain.pessoa.CategoriaCnh;
import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.domain.pessoa.Passageiro;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

class CalculaIdadeTest {

    @Test
    void calculaIdadeMotorista() {


        Motorista motora = new Motorista();
        CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
        cnh.setCategoria(CategoriaCnh.B);
        cnh.setNumeroDoDocumento("123132313");

        motora.setNome("Lucas Fernando");
        motora.setCarteiraDeHabilitacao(cnh);
        motora.setDataNascimento(LocalDate.of(1990,11,06));
        motora.setEmail("lucas@cwi.com.br");
        motora.setId(Long.valueOf(1));
        CalculaIdade calculadora = new CalculaIdade();

        Assertions.assertEquals(27, calculadora.idade(motora.getDataNascimento()));
    }

    @Test
    void calculaIdadePassageiro() {

        Passageiro carona = new Passageiro();
        carona = new Passageiro();
        carona.setNome("Gilberto Zé");
        carona.setDataNascimento(LocalDate.of(1990,11,06));
        carona.setEmail("gilberto@cwi.com.br");
        carona.setId(Long.valueOf(1));
        CalculaIdade calculadora = new CalculaIdade();

        Assertions.assertEquals(27, calculadora.idade(carona.getDataNascimento()));
    }

}