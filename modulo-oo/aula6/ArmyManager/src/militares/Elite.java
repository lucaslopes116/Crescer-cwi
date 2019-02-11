package militares;

import tipoDePilotagem.*;

import java.time.LocalDate;

public class Elite extends Guerreiro implements PilotoDeAviao, PilotoDeCaminhao, PilotoDeHelicoptero, PilotoDeTanque {

    private LocalDate habilitacaoAviao;
    private LocalDate habilitacaoHelicoptero;
    private LocalDate habilitacaoCaminhao;
    private LocalDate getHabilitacaoTanque;


    public Elite(double salario,LocalDate habilitacaoCaminhao, LocalDate habilitacaoHelicoptero, LocalDate habilitacaoAviao, LocalDate habilitacaoTanque) {
        super(salario);
        this.habilitacaoCaminhao = habilitacaoCaminhao;
        this.habilitacaoHelicoptero = habilitacaoHelicoptero;
        this.habilitacaoAviao = habilitacaoAviao;
        this.getHabilitacaoTanque = habilitacaoTanque;
    }

    public Elite(double salario) {
        super(salario);
    }



    @Override
    public LocalDate getVerificaHabilitacaoCaminhao() {
        return habilitacaoCaminhao;
    }

    @Override
    public LocalDate getVerificaHabilitacaoHelicoptero() {
        return habilitacaoHelicoptero;
    }

    @Override
    public LocalDate getVerificaHabilitacaoTanque() {
        return getHabilitacaoTanque;
    }

    @Override
    public LocalDate getVerificaHabilitacaoAviao() {
        return habilitacaoAviao;
    }
}


