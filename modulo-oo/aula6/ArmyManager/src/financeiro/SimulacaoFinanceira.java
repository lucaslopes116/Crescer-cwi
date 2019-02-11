package financeiro;

import militares.Guerreiro;
import veiculos.Veiculos;

import java.util.List;

public class SimulacaoFinanceira  {

    private double distanciaDaMissao;
    private List<Veiculos> veiculos;
    private int duracaoDaMissao;


    public SimulacaoFinanceira(double distanciaDaMissao, List<Veiculos> veiculos, int duracaoDaMissao) {
        this.distanciaDaMissao = distanciaDaMissao;
        this.veiculos = veiculos;
        this.duracaoDaMissao = duracaoDaMissao;

    }

    public double getCustoTotal() {
        double custoTotal = 0;
        double gastoCombustivel = 0;

        for (Veiculos veiculos : veiculos) {
            if(veiculos.getPiloto() != null && veiculos.tripulacaoValida()) {

                custoTotal = custoTotal + veiculos.getPiloto().getSalario();

                for (int i = 0; i < veiculos.getTripulantes().size(); i++) {
                    custoTotal = custoTotal + veiculos.getTripulantes().get(i).getSalario();
                }
                gastoCombustivel += (this.distanciaDaMissao / veiculos.getPrecoCombustivelPorLitro() * veiculos.getQuilometragePorLitro());
            }
        }

        custoTotal = custoTotal * duracaoDaMissao;
        custoTotal = custoTotal + gastoCombustivel;

        return custoTotal;
    }




    public double getDistanciaDaMissao() {
        return distanciaDaMissao;
    }

    public void setDistanciaDaMissao(double distanciaDaMissao) {
        this.distanciaDaMissao = distanciaDaMissao;
    }

    public int getDuracaoDaMissao() {
        return duracaoDaMissao;
    }

    public void setDuracaoDaMissao(int duracaoDaMissao) {
        this.duracaoDaMissao = duracaoDaMissao;
    }
}
