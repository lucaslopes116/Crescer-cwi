package militares;

import tipoDePilotagem.PilotoDeTanque;

import java.time.LocalDate;
import java.util.Date;

public class PilotoTanque extends Guerreiro implements PilotoDeTanque {

    private LocalDate habilitacaoTanque;

    public PilotoTanque(double salario, LocalDate habilitacaoTanque) {
        super(salario);
        this.habilitacaoTanque = habilitacaoTanque;
    }

    public PilotoTanque(double salario) {
        super(salario);
    }


    @Override
    public LocalDate getVerificaHabilitacaoTanque() {
        return habilitacaoTanque;
    }
}
