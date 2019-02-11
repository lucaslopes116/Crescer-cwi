package br.com.cwi.crescer.service.passageiro;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CadastrarPassageiroService {

    @Autowired
     private PassageiroRepository passageiroRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

     public Passageiro cadastrarPassageiro(Passageiro novoPassageiro) {

        if (!novoPassageiro.possuiIdadeMinimaPassageiro()) {
            throw new ValidacaoNegocioException("O passageiro não possui a idade mínima necessária segundo a legislação brasileira.");
        }

        novoPassageiro.setAtivo(true);
        novoPassageiro.setSenha(passwordEncoder.encode(novoPassageiro.getSenha()));

        return passageiroRepository.save(novoPassageiro);
    }


}
