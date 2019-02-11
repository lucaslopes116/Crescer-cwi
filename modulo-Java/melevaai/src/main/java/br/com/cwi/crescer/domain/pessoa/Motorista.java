package br.com.cwi.crescer.domain.pessoa;

import br.com.cwi.crescer.domain.CalculaIdade;
import br.com.cwi.crescer.domain.identificador.Perfil;
import br.com.cwi.crescer.exception.MotoristaException;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.time.LocalDate;
import java.time.Period;


@Getter
@Setter
@Entity
public class Motorista extends Pessoa {

    private static final long IDADE_MINIMA_MOTORISTA = 18;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_Carteira_Habilitacao")
    private CarteiraDeHabilitacao carteiraDeHabilitacao;
    private boolean ocupado = false;

    public Perfil getPerfil() {
        return Perfil.MOTORISTA;
    }


    public boolean verificaIdade() throws MotoristaException {

        CalculaIdade calculaIdade = new CalculaIdade();
        if (calculaIdade.idade(this.getDataNascimento()) < IDADE_MINIMA_MOTORISTA) {
            throw new MotoristaException();
        } else {
            return true;
        }
    }

    public boolean possuiIdadeMinimaParaDirigir() {
        LocalDate dataAtual = LocalDate.now();
        Period periodo = Period.between(this.getDataNascimento(), dataAtual);
        return periodo.getYears() >= IDADE_MINIMA_MOTORISTA;
    }

}

