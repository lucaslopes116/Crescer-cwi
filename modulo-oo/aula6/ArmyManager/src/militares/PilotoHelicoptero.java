package militares;

import tipoDePilotagem.PilotoDeHelicoptero;

import java.time.LocalDate;
import java.util.Date;

public class PilotoHelicoptero extends Guerreiro implements PilotoDeHelicoptero {

    private LocalDate habilitacaoHelicoptero;

    public PilotoHelicoptero(double salario, LocalDate habilitacaoHelicoptero) {
        super(salario);
        this.habilitacaoHelicoptero = habilitacaoHelicoptero;
    }

    public PilotoHelicoptero(double salario) {
        super(salario);
    }


    @Override
    public LocalDate getVerificaHabilitacaoHelicoptero() {
        return habilitacaoHelicoptero;
    }
}
