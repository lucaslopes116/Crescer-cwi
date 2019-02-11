package veiculos;

import militares.Guerreiro;

import java.util.List;

public class Tanque extends Veiculos {


    public Tanque(Guerreiro piloto, List<Guerreiro> tripulantes, double quilometragePorLitro, double precoCombustivelPorLitro) {
        super(piloto, tripulantes, quilometragePorLitro, precoCombustivelPorLitro);
    }

    @Override
    public boolean tripulacaoValida() {
        return getTripulantes().size() == 3 && getTripulantes() != null;

    }
}