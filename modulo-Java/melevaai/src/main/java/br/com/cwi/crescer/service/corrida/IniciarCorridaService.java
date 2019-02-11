package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.domain.pessoa.Status;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class IniciarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    @Autowired
    private ListarCorridaService listarCorridaService;

    public Corrida iniciarCorrida(Long id) {
        Optional<Corrida> corridaOptional = listarCorridaService.listarCorrida().stream().filter(corrida -> corrida.getId().equals(id)).findFirst();

        if(!corridaOptional.isPresent()){
            throw new ValidacaoNegocioException("Não foi possivel encontrar a corrida");
        }

        Corrida corridaIniciada = corridaOptional.get();
        corridaIniciada.setValorCorrida(corridaIniciada.valorCorrida());
        corridaIniciada.setTempoEstimado(corridaIniciada.tempoRandom());
        corridaIniciada.setDataInicioCorrida(LocalDate.now());
        corridaIniciada.getVeiculo().getMotorista().setOcupado(true);
        corridaIniciada.setStatus(Status.Andamento);

        return corridaRepository.save(corridaIniciada);

    }



}

