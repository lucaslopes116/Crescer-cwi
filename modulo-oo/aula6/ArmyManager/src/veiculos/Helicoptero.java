package veiculos;

import militares.Guerreiro;

import java.util.List;

public class Helicoptero extends Veiculos {


    public Helicoptero(Guerreiro piloto, List<Guerreiro> tripulantes, double quilometragePorLitro, double precoCombustivelPorLitro) {
        super(piloto, tripulantes, quilometragePorLitro, precoCombustivelPorLitro);
    }

    @Override
    public boolean tripulacaoValida() {
        return getTripulantes().size() <= 10 && getTripulantes().size() > 1 && getTripulantes() != null;

    }
}
