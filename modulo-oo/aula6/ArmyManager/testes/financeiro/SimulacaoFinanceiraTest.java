package financeiro;

import militares.Guerreiro;
import militares.Militar;
import militares.PilotoHelicoptero;
import militares.PilotoTanque;
import org.junit.jupiter.api.Test;
import veiculos.Aviao;
import veiculos.Helicoptero;
import veiculos.Tanque;
import veiculos.Veiculos;
import financeiro.SimulacaoFinanceira;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SimulacaoFinanceiraTest {

    @Test
    void custoDaMissao() {

        LocalDate habilitacaoTanque = LocalDate.of(2018,10,25);

        Guerreiro murdok = new PilotoHelicoptero(2000,habilitacaoTanque );
        List<Guerreiro> tripulantesAviao = new ArrayList<>();

        Veiculos aviao = new Aviao(murdok,tripulantesAviao, 100, 10);
        List<Veiculos> veiculos = new ArrayList<>();
        veiculos.add(aviao);
        SimulacaoFinanceira simulacaoFinanceira = new SimulacaoFinanceira(10,veiculos,1);


        double custoMissao = simulacaoFinanceira.getCustoTotal();
        double combustivel = aviao.getQuilometragePorLitro();

        assertEquals(2100, custoMissao);

    }


}