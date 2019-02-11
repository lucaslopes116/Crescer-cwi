package br.com.cwi.crescer.service.veiculo;


import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarVeiculoService {


    @Autowired
    private VeiculoRepository veiculoRepository;


    public Page<Veiculo> listarVeiculos(Pageable pageable) {
        return veiculoRepository.findAll(pageable);
    }


}

