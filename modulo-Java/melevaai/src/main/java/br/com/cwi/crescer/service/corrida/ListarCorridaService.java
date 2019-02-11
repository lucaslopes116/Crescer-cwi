package br.com.cwi.crescer.service.corrida;

import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;


    public List<Corrida> listarCorrida() {

        return corridaRepository.findAll();
    }

}

