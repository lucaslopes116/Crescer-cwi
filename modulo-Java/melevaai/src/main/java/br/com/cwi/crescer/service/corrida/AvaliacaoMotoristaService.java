package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.repository.CorridaRepository;
import br.com.cwi.crescer.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.ValidationException;
import java.util.Optional;

@Service
public class AvaliacaoMotoristaService {

    @Autowired
    private CorridaRepository corridaRepository;

    @Autowired
    private ListarCorridaService listarCorridaService;


    public void avaliarMotorista(int avaliacao, UserPrincipal userPrincipal) throws ValidationException {


        Optional<Corrida> corridaOptional = listarCorridaService.listarCorrida().stream().filter(corrida -> corrida.getId().equals(userPrincipal.getId())).findFirst();
        if (!corridaOptional.isPresent()) {
            throw new ValidationException("Não existe corrida para avalidar");
        }

        Corrida corrida = corridaOptional.get();


        if (!(avaliacao >= 1 && avaliacao <= 5)) {
            throw new ValidationException("Avaliação inválida");
        }

        corrida.setAvaliacaoMotorista(avaliacao);
        corridaRepository.save(corrida);


    }
}

