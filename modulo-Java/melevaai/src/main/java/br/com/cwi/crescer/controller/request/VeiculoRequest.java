package br.com.cwi.crescer.controller.request;

import br.com.cwi.crescer.domain.pessoa.CategoriaCnh;
import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.domain.veiculo.Cor;
import br.com.cwi.crescer.domain.veiculo.Marca;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
public class VeiculoRequest {

    private Long id;
    private Marca marca;
    private String modelo;
    private int ano;
    private Cor cor;
    private CategoriaCnh categoriaCnh;
    private int quantidadeDeLugares;
    private Long idMotorista;
    private String foto;
    private String placa;
}
