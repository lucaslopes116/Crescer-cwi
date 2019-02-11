package br.com.cwi.crescer.tcc.controller.request;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
public class AmizadeRequest {

    private Long idUsuario;
    private Long idAmigo;
}
