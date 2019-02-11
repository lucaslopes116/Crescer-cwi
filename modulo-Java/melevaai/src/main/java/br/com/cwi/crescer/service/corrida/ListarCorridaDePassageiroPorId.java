package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.CorridaRepository;
import br.com.cwi.crescer.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ListarCorridaDePassageiroPorId {

    @Autowired
    private CorridaRepository corridaRepository;

    @Autowired
    private ListarCorridaService listarCorridaService;

    public List<Corrida> listarCorridaDePassageiro(UserPrincipal userPrincipal, Long id) {

        Stream<Corrida> corridaOptional = listarCorridaService.listarCorrida().stream().filter(corrida -> corrida.getPassageiro().getId().equals(id));
        List<Corrida> result = corridaOptional.collect(Collectors.toList());
        if (result.size() == 0) {
            throw new ValidacaoNegocioException("Não há corridas para este passageiro");
        }

        if(!result.get(0).getPassageiro().getId().equals(userPrincipal.getId())){
            throw new ValidacaoNegocioException("Não esta autorizado um passageiro visualizar as corridas de outro!");
        }

        return corridaRepository.findAll();

    }

}

