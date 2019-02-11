package br.com.cwi.crescer.tcc.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SolicitacaoAmizadeDto {

    private Long idAmigo;
    private String nomeAmigo;
    private String fotoAmigo;
}
