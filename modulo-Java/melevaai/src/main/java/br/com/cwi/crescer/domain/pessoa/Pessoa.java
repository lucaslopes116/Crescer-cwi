package br.com.cwi.crescer.domain.pessoa;

import br.com.cwi.crescer.domain.identificador.Perfil;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

import static br.com.cwi.crescer.domain.identificador.Perfil.ADMINISTRADOR;


@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@SequenceGenerator(name="PESSOA", sequenceName = "SEQ_PESSOA", initialValue = 1,allocationSize = 1)
public abstract class Pessoa {
    @Valid
    @Column(name = "nome_completo")
    private String nome;
    @Email
    @NotNull
    private String email;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dataNascimento;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PESSOA")
    private Long id;
    @Column(columnDefinition = "NUMBER(19,2)")
    private double  saldo;
    private Boolean ativo = true;
    private String senha;


    public Perfil getPerfil() {
        return ADMINISTRADOR;
    }


}
