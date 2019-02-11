package br.com.cwi.crescer.service.veiculo;


import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuscarVeiculoPorId {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Autowired
    private ListarVeiculoService listarVeiculoService;

    public Veiculo buscarPorId(Long id) {
        return veiculoRepository.findById(id).orElseThrow(() -> new ValidacaoNegocioException("Veiculo não encontrado!"));
    }

}

