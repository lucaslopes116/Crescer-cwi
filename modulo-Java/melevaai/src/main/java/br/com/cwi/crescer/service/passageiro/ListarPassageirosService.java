package br.com.cwi.crescer.service.passageiro;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class ListarPassageirosService {

    @Autowired
    private PassageiroRepository passageiroRepository;


    public Page<Passageiro> listar(Pageable pageable) {
        return passageiroRepository.findAll(pageable);
    }

}
