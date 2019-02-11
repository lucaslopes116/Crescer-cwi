package br.com.cwi.crescer.service.passageiro;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuscarPassageiroPorId {

    @Autowired
    private PassageiroRepository passageiroRepository;

    @Autowired
    private ListarPassageirosService listarPassageirosService;

    public Passageiro buscarPorId(Long id) {
        return passageiroRepository.findById(id).orElseThrow(() -> new ValidacaoNegocioException("Passageiro não encontrado!"));
    }
}
