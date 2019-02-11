package militares;


import tipoDePilotagem.PilotoDeCaminhao;
import tipoDePilotagem.PilotoDeTanque;

import java.time.LocalDate;

public class EspecialistaTerrestre extends Guerreiro implements PilotoDeTanque, PilotoDeCaminhao {

    private LocalDate habilitacaoTanque;
    private LocalDate habilitacaoCaminhao;

    public EspecialistaTerrestre(double salario, LocalDate habilitacaoCaminhao, LocalDate habilitacaoTanque) {
        super(salario);
        this.habilitacaoCaminhao = habilitacaoCaminhao;
        this.habilitacaoTanque = habilitacaoTanque;
    }

    public EspecialistaTerrestre(double salario) {
        super(salario);
    }


    @Override
    public LocalDate getVerificaHabilitacaoCaminhao() {
        return habilitacaoCaminhao;
    }

    @Override
    public LocalDate getVerificaHabilitacaoTanque() {
        return habilitacaoTanque;
    }
}
