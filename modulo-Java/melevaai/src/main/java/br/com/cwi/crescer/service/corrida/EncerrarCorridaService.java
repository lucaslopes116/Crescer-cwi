package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.domain.pessoa.Status;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.CorridaRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class EncerrarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    @Autowired
    private ListarCorridaService listarCorridaService;

    public void encerrarCorrida(Long id) {

        Optional<Corrida> corridaOptional = listarCorridaService.listarCorrida().stream().filter(e -> e.getId().equals(id)).findFirst();

        Corrida corrida = corridaOptional.get();
        corrida.setValorCorrida((corrida.tempoRandom() * 60) * corrida.valorCorrida());
        corrida.getPassageiro().setSaldo(corrida.getPassageiro().getSaldo() - corrida.getValorCorrida());
        corrida.getVeiculo().getMotorista().setSaldo(corrida.getVeiculo().getMotorista().getSaldo() + corrida.getValorCorrida());
        corrida.setDataInicioCorrida(corrida.getDataInicioCorrida());
        corrida.setDataFimCorrida(corrida.getDataInicioCorrida().plusDays(corrida.tempoRandom()));
        corrida.setDataFimCorrida(LocalDate.now());
        corrida.setStatus(Status.Finalizada);
        corrida.getVeiculo().getMotorista().setOcupado(false);

        corridaRepository.save(corrida);
    }
}

