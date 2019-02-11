package br.com.cwi.crescer.service.motorista;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeletarMotoristaService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    public void sairDoServico(Motorista motorista) {

        if ((motorista == null)) {
            throw new ValidacaoNegocioException("Não existe este passageiro");
        }

        motorista.setAtivo(false);
        motoristaRepository.save(motorista);
    }
}


