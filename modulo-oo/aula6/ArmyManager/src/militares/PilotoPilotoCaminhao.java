package militares;

import tipoDePilotagem.PilotoDeCaminhao;

import java.time.LocalDate;
import java.util.Date;

public class PilotoPilotoCaminhao extends Guerreiro implements PilotoDeCaminhao {

    private LocalDate habilitacaoCaminhao;

    public PilotoPilotoCaminhao(double salario, LocalDate habilitacaoCaminhao) {
        super(salario);
        this.habilitacaoCaminhao = habilitacaoCaminhao;
    }

    public PilotoPilotoCaminhao(double salario) {
        super(salario);
    }


    @Override
    public LocalDate getVerificaHabilitacaoCaminhao() {
        return habilitacaoCaminhao;
    }
}
