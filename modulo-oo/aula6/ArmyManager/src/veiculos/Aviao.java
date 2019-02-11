package veiculos;

import militares.Guerreiro;

import java.util.List;

public class Aviao extends Veiculos {


    private Guerreiro piloto;

    public Aviao(Guerreiro piloto, List<Guerreiro> tripulantes, double quilometragePorLitro, double precoCombustivelPorLitro) {
        super(piloto, tripulantes, quilometragePorLitro, precoCombustivelPorLitro);
    }


    @Override
    public boolean tripulacaoValida() {
        return getTripulantes().size() < 2 && getTripulantes() != null;

    }
}
