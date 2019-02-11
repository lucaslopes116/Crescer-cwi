package br.com.cwi.crescer.tcc.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@Getter
@Setter
public class UsuarioDto {

    private Long id;
    private String nomeCompleto;
    private String email;
    private LocalDate dataNascimento;
    private String fotoPerfil;
}
