package br.com.cwi.crescer.service.veiculo;

import br.com.cwi.crescer.domain.pessoa.CarteiraDeHabilitacao;
import br.com.cwi.crescer.domain.pessoa.CategoriaCnh;
import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.domain.veiculo.Cor;
import br.com.cwi.crescer.domain.veiculo.Marca;
import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import br.com.cwi.crescer.service.motorista.BuscarMotoristaIdService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;


@ExtendWith(MockitoExtension.class)
class CadastrarVeiculoServiceTest {

    @InjectMocks
    private CadastrarVeiculoService cadastrarVeiculoService;

    @Mock
    private VeiculoRepository veiculoRepository;
    @Mock
    private BuscarMotoristaIdService buscarMotoristaIdService;

    private Veiculo veiculoValido = new Veiculo();
    private Motorista motoristaValido = new Motorista();
    private CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();

    @BeforeEach
    void setup(){

        cnh.setNumeroDoDocumento("1231331");
        cnh.setCategoria(CategoriaCnh.B);
        cnh.setDataVencimento(LocalDate.of(2020,11,06));

        motoristaValido.setCarteiraDeHabilitacao(cnh);
        motoristaValido.setId(1L);
        motoristaValido.isOcupado();
        motoristaValido.setEmail("lucas@cwi.com.br");
        motoristaValido.setNome("Lucas fernando");
        motoristaValido.setDataNascimento(LocalDate.of(1990,11,06));


        veiculoValido.setId(motoristaValido.getId());
        veiculoValido.setMotorista(motoristaValido);
        veiculoValido.setQuantidadeDeLugares(4);
        veiculoValido.setModelo("BOM");
        veiculoValido.setMarca(Marca.BMW);
        veiculoValido.setCor(Cor.Branco);
        veiculoValido.setCategoriaCnh(CategoriaCnh.A);
        veiculoValido.setAno(2018);

    }

    @Test
    public void cadastrarVeiculoComErroDeveRetornarException() {
        Mockito.when(buscarMotoristaIdService.buscarPorId(motoristaValido.getId())).thenReturn(motoristaValido);
        Assertions.assertThrows(ValidacaoNegocioException.class,()->{
            cadastrarVeiculoService.cadastrar(motoristaValido.getId(),veiculoValido);
        });
    }


    @Test
    void cadastrarNovoVeiculoValido() {

        //CENARIO
        Veiculo veiculo = veiculoValido;
        motoristaValido.getCarteiraDeHabilitacao().setCategoria(CategoriaCnh.A);

        //MOKITO
        Mockito.when(buscarMotoristaIdService.buscarPorId(motoristaValido.getId())).thenReturn(motoristaValido);

        //TARRGET
        Mockito.when(veiculoRepository.save(veiculoValido)).thenReturn(veiculoValido);
        Veiculo novoVeiculo = cadastrarVeiculoService.cadastrar(motoristaValido.getId(),veiculo);

        //VERIFY
        Mockito.verify(veiculoRepository,Mockito.times(1)).save(veiculoValido);
        Mockito.verifyNoMoreInteractions(veiculoRepository);

        Assertions.assertSame(veiculoValido,novoVeiculo );
    }

}