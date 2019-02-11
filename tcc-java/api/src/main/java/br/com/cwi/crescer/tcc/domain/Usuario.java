package br.com.cwi.crescer.tcc.domain;

import br.com.cwi.crescer.tcc.identificador.Perfil;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

import static br.com.cwi.crescer.tcc.identificador.Perfil.USUARIO;



@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@SequenceGenerator(name="PESSOA", sequenceName = "identificadorusuario", initialValue = 1,allocationSize = 1)
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PESSOA")
    private Long id;
    @Valid
    private String nomeCompleto;
    @Valid
    private String apelido;
    @Email
    @NotNull
    private String email;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dataNascimento;
    private String fotoPerfil;
    private Boolean ativo = true;
    private String senha;



    public Perfil getPerfil() {
        return USUARIO;
    }
}
