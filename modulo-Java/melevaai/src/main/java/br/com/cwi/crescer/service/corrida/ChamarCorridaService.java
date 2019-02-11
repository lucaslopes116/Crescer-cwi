package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.domain.pessoa.Status;
import br.com.cwi.crescer.repository.CorridaRepository;
import br.com.cwi.crescer.repository.PassageiroRepository;
import br.com.cwi.crescer.security.UserPrincipal;
import br.com.cwi.crescer.service.veiculoRandom.VeiculoRandomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChamarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    @Autowired
    private VeiculoRandomService veiculoRandomService;

    @Autowired
    private PassageiroRepository passageiroRepository;


    public Corrida chamarCorrida(Corrida corrida,UserPrincipal userPrincipal) {

        Optional<Passageiro> passageiroOptional = passageiroRepository.findById(userPrincipal.getId());

        corrida.setPassageiro(passageiroOptional.get());


        corrida.setVeiculo(veiculoRandomService.veiculoRandom());
        corrida.setId(corridaRepository.findAll().size() + 1L);
        corrida.getPontoInicial();
        corrida.getPontoFinal();
        corrida.setStatus(Status.Criada);
        corrida.getVeiculo().getMotorista().setOcupado(true);

        return corridaRepository.save(corrida);
    }

}



