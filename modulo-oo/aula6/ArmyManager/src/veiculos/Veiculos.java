package veiculos;

import militares.Guerreiro;

import java.util.ArrayList;
import java.util.List;

public abstract class Veiculos {

    protected Guerreiro piloto;
    protected double quilometragePorLitro;
    protected double precoCombustivelPorLitro;
    protected List<Guerreiro> tripulantes;


    public Veiculos(Guerreiro piloto, List<Guerreiro> tripulantes, double quilometragePorLitro, double precoCombustivelPorLitro) {
        this.piloto = piloto;
        this.tripulantes = new ArrayList<>(tripulantes);
        this.quilometragePorLitro = quilometragePorLitro;
        this.precoCombustivelPorLitro = precoCombustivelPorLitro;
    }

    public void embarcarTripulacao(Guerreiro tripulacao) {
        this.tripulantes.add(tripulacao);
    }

    public Guerreiro getPiloto() {
        return piloto;
    }

    public double getQuilometragePorLitro() {
        return quilometragePorLitro;
    }

    public double getPrecoCombustivelPorLitro() {
        return precoCombustivelPorLitro;
    }

    public List<Guerreiro> getTripulantes() {
        return tripulantes;
    }

    public void setTripulantes(List<Guerreiro> tripulantes) {
        this.tripulantes = tripulantes;
    }

    public abstract boolean tripulacaoValida();


}
