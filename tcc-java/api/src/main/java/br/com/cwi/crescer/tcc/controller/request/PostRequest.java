package br.com.cwi.crescer.tcc.controller.request;


import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class PostRequest {

    private Long id;
    private String tituloPost;
    private String descricaoPost;
    private String imagemPost;
    private TipoPermissao tipoPermissao;
    private LocalDateTime dataPost = LocalDateTime.now();
    private Long idUsuario;

}
