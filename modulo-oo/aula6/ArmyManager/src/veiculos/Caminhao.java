package veiculos;

import militares.Guerreiro;

import java.util.List;

public class Caminhao extends Veiculos {


    public Caminhao(Guerreiro piloto, List<Guerreiro> tripulantes, double quilometragePorLitro, double precoCombustivelPorLitro) {
        super(piloto, tripulantes, quilometragePorLitro, precoCombustivelPorLitro);
    }

    @Override
    public boolean tripulacaoValida() {
        return ((getTripulantes().size() <= 30) && (getTripulantes().size() >= 5)) && getTripulantes() != null;

    }
}
