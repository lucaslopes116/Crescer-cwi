package br.com.cwi.crescer.service.motorista;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarTodosMotoristasService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    public Page<Motorista> listar(Pageable pageable) {
        return motoristaRepository.findAll(pageable);
    }


}
