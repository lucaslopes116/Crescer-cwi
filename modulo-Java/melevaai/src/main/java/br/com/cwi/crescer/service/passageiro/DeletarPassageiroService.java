package br.com.cwi.crescer.service.passageiro;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeletarPassageiroService {

    @Autowired
    private PassageiroRepository passageiroRepository;

    public void deletarPassageiro(Passageiro passageiro) {

        if ((passageiro == null)) {
            throw new ValidacaoNegocioException("Não existe este passageiro");
        }

        passageiroRepository.delete(passageiro);

    }
}
