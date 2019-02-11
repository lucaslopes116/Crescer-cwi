package br.com.cwi.crescer.service.motorista;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuscarMotoristaIdService {

    @Autowired
    private MotoristaRepository motoristaRepository;


    public Motorista buscarPorId(Long id) {
        return motoristaRepository.findById(id).orElseThrow(() -> new ValidacaoNegocioException("Motorista não encontrado!"));
    }



}
