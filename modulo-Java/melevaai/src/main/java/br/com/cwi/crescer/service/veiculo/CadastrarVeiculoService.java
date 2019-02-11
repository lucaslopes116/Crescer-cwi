package br.com.cwi.crescer.service.veiculo;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import br.com.cwi.crescer.service.motorista.BuscarMotoristaIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastrarVeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Autowired
    private BuscarMotoristaIdService buscarMotoristaIdService;

    public Veiculo cadastrar(Long idMotorista,Veiculo novoVeiculo) {

       Motorista motorista = buscarMotoristaIdService.buscarPorId(idMotorista);

        if(!motorista.getCarteiraDeHabilitacao().getCategoria().equals(novoVeiculo.getCategoriaCnh())){
            throw new ValidacaoNegocioException("Motorista não habilitado");
        }

        novoVeiculo.setMotorista(motorista);

        return veiculoRepository.save(novoVeiculo);
    }
}

