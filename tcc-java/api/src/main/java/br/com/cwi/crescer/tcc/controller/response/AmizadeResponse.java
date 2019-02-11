package br.com.cwi.crescer.tcc.controller.response;


import br.com.cwi.crescer.tcc.identificador.Status;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class AmizadeResponse {

    private String nomeUsuario;
    private String nomeAmigo;
    private Status status;
}
