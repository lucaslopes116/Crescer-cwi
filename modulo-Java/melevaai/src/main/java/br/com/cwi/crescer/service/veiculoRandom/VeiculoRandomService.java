package br.com.cwi.crescer.service.veiculoRandom;

import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class VeiculoRandomService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public Veiculo veiculoRandom() {

        Veiculo veiculoLivre = veiculoRepository.findByMotorista_OcupadoTrue();

        if(veiculoLivre == null) {
            throw new ValidacaoNegocioException("Nenhum veiculo livre");
        } else {
            return veiculoLivre;
        }
    }
}
