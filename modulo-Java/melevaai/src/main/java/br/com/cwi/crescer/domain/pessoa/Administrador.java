package br.com.cwi.crescer.domain.pessoa;


import br.com.cwi.crescer.domain.identificador.Perfil;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Administrador extends Pessoa {

    public Perfil getPerfil() {
        return Perfil.ADMINISTRADOR;
    }

}
