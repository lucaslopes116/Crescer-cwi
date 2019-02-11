package br.com.cwi.crescer.tcc.domain.dto;


import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
@AllArgsConstructor
public class ListarPostUsuarioLogadoEAmigos {

    private Long id;
    private String tituloPost;
    private String descricaoPost;
    private String imagemPost;
    private TipoPermissao tipoPermissao;
    private LocalDateTime dataPost;
    private String nomeCompleto;

}
