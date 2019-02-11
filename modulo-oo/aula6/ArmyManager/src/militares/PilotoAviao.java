package militares;

import tipoDePilotagem.PilotoDeAviao;

import java.time.LocalDate;
import java.util.Date;

public class PilotoAviao extends Guerreiro implements PilotoDeAviao {

    private LocalDate habilitacaoAviao;



    public PilotoAviao(double salario, LocalDate habilitacaoAviao) {
        super(salario);
        this.habilitacaoAviao = habilitacaoAviao;
    }

    public PilotoAviao(double salario) {
        super(salario);
    }

    @Override
    public LocalDate getVerificaHabilitacaoAviao() {
        return habilitacaoAviao;
    }




    /*@Override
    public LocalDate verificaHabilitacao() {
        if(habilitacaoAviao.isAfter(LocalDate.now())){
            return habilitacaoAviao;
        }
    }*/
}
