package br.com.cwi.crescer.service.veiculoRandom;

import br.com.cwi.crescer.domain.pessoa.CarteiraDeHabilitacao;
import br.com.cwi.crescer.domain.pessoa.CategoriaCnh;
import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.domain.veiculo.Cor;
import br.com.cwi.crescer.domain.veiculo.Marca;
import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
class VeiculoRandomServiceTest {

    @InjectMocks
    private VeiculoRandomService veiculoRandomService;

    @Mock
    private VeiculoRepository veiculoRepository;

    private Veiculo veiculoValido = new Veiculo();
    private Motorista motoristaValido = new Motorista();
    private CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
    private List<Veiculo> listaDeVeiculos = new ArrayList<>();

    @BeforeEach
    void setup(){

        cnh.setNumeroDoDocumento("1231331");
        cnh.setCategoria(CategoriaCnh.B);
        cnh.setDataVencimento(LocalDate.of(2020,11,06));

        motoristaValido.setCarteiraDeHabilitacao(cnh);
        motoristaValido.setId(1L);
        motoristaValido.isOcupado();
        motoristaValido.setOcupado(false);
        motoristaValido.setEmail("lucas@cwi.com.br");
        motoristaValido.setNome("Lucas fernando");
        motoristaValido.setDataNascimento(LocalDate.of(1990,11,06));


        veiculoValido.setId(motoristaValido.getId());
        veiculoValido.setMotorista(motoristaValido);
        veiculoValido.setQuantidadeDeLugares(4);
        veiculoValido.setModelo("BOM");
        veiculoValido.setMarca(Marca.BMW);
        veiculoValido.setCor(Cor.Branco);
        veiculoValido.setCategoriaCnh(CategoriaCnh.B);
        veiculoValido.setAno(2018);

        listaDeVeiculos.add(veiculoValido);

    }

    @Test
    void deveSortearVeiculo(){
        Mockito.when(veiculoRepository.findByMotorista_OcupadoTrue()).thenReturn(veiculoValido);

        Veiculo veiculo = veiculoRandomService.veiculoRandom();

        Assertions.assertEquals(veiculo,veiculoValido);
        Assertions.assertEquals(veiculo.getClass(),veiculoValido.getClass());
        Assertions.assertEquals(veiculo.getMotorista(),veiculoValido.getMotorista());
        Assertions.assertEquals(veiculo.getCor(),veiculoValido.getCor());
        Assertions.assertEquals(veiculo.getAno(),veiculoValido.getAno());
    }

    @Test
    public void sortearVeiculoSemVeiculoNaListaDeveRetornarException() {
        Mockito.when(veiculoRepository.findByMotorista_OcupadoTrue()).thenReturn(null);

        Assertions.assertThrows(ValidacaoNegocioException.class,()->{
            veiculoRandomService.veiculoRandom();
        });
    }
}