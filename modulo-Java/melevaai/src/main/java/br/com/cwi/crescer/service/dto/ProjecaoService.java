package br.com.cwi.crescer.service.dto;

import br.com.cwi.crescer.domain.dto.Projecao;
import br.com.cwi.crescer.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjecaoService {

    @Autowired
    private CorridaRepository corridaRepository;


    public List<Projecao> findAll() {

        return corridaRepository.relatorio();
    }
}
