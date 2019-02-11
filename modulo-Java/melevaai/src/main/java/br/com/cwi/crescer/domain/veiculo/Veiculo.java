package br.com.cwi.crescer.domain.veiculo;

import br.com.cwi.crescer.domain.pessoa.CategoriaCnh;
import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static br.com.cwi.crescer.domain.pessoa.CategoriaCnh.*;

@Data
@NoArgsConstructor
@Entity
@SequenceGenerator(name="VEICULO", sequenceName = "SEQ_VEICULO", initialValue = 1,allocationSize = 1)
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VEICULO")
    private Long id;
    @Enumerated(EnumType.STRING)
    private Marca marca;
    private String modelo;
    private int ano;
    @Enumerated(EnumType.STRING)
    private Cor cor;
    @Enumerated(value = EnumType.STRING)
    @Column(name = "Categoria")
    private CategoriaCnh categoriaCnh;
    @Column(name = "Quantidade_lugares")
    private int quantidadeDeLugares;
    @ManyToOne
    @JoinColumn(name = "id_motorista")
    private Motorista motorista;
    private String foto;
    private String placa;

    public Veiculo(Marca marca, String modelo, int ano, Cor cor, CategoriaCnh categoriaCnh, int quantidadeDeLugares, Motorista motorista) throws ValidacaoNegocioException {

        if (verificaCategoria(motorista.getCarteiraDeHabilitacao().getCategoria(), categoriaCnh)) {
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.cor = cor;
            this.categoriaCnh = categoriaCnh;
            this.quantidadeDeLugares = quantidadeDeLugares;
            this.motorista = motorista;
        } else {
            throw new ValidacaoNegocioException("Motorista sem habilitação adequada");
        }
    }

    public boolean verificaCategoria(CategoriaCnh motoristaCategoria, CategoriaCnh veiculoCategoria) {

        switch (motoristaCategoria) {
            case A:
                if (veiculoCategoria == A) {
                    return true;
                }
                break;

            case B:

                if (veiculoCategoria == B) {
                    return true;
                }
                break;

            case C:

                if (veiculoCategoria == C) {
                    return true;
                }
                break;

            case D:

                if (veiculoCategoria == D) {
                    return true;
                }
                break;

            case E:
                if (veiculoCategoria == E) {
                    return true;
                }
                break;
        }
        return false;
    }
}


