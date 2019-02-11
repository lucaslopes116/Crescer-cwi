package br.com.cwi.crescer.service.veiculo;


import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeletarVeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public void deletarVeiculo(Veiculo veiculo) {

        if ((veiculo == null)) {
            throw new ValidacaoNegocioException("Não existe este veiculo");
        }

        veiculoRepository.delete(veiculo);

    }
}

