package br.com.cwi.crescer.tcc.domain;

import br.com.cwi.crescer.tcc.identificador.Perfil;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Administrador extends Usuario {

    public Perfil getPerfil() {
        return Perfil.ADMINISTRADOR;
    }

}
