package br.com.cwi.crescer.domain.pessoa;

import br.com.cwi.crescer.domain.CalculaIdade;
import br.com.cwi.crescer.domain.identificador.Perfil;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.time.LocalDate;
import java.time.Period;

@Getter
@Setter
@Entity
public class Passageiro extends Pessoa {

    private static final long IDADE_MINIMA_PASSAGEIRO = 16;

    public Perfil getPerfil() {
        return Perfil.PASSAGEIRO;
    }


    public boolean verificaIdade(){

        CalculaIdade calculaIdade = new CalculaIdade();
        if (calculaIdade.idade(this.getDataNascimento()) < IDADE_MINIMA_PASSAGEIRO) {
            return false;
        } else {
            return true;
        }
    }

    public boolean possuiIdadeMinimaPassageiro() {
        LocalDate dataAtual = LocalDate.now();
        Period periodo = Period.between(this.getDataNascimento(), dataAtual);
        return periodo.getYears() >= IDADE_MINIMA_PASSAGEIRO;
    }

}
