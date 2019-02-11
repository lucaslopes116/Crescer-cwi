package militares;

import tipoDePilotagem.PilotoDeAviao;
import tipoDePilotagem.PilotoDeHelicoptero;

import java.time.LocalDate;

public class EspecialistaDoAr extends Guerreiro implements PilotoDeAviao, PilotoDeHelicoptero {

    private LocalDate habilitacaoAviao;
    private LocalDate habilitacaoHelicoptero;


    public EspecialistaDoAr(double salario, LocalDate habilitacaoAviao, LocalDate habilitacaoHelicoptero) {
        super(salario);
        this.habilitacaoAviao = habilitacaoAviao;
        this.habilitacaoHelicoptero = habilitacaoHelicoptero;

    }

    public EspecialistaDoAr(double salario) {
        super(salario);
    }


    @Override
    public LocalDate getVerificaHabilitacaoAviao() {
        return habilitacaoAviao;
    }

    @Override
    public LocalDate getVerificaHabilitacaoHelicoptero() {
        return habilitacaoHelicoptero;
    }
}
