package br.com.cwi.crescer.service.passageiro;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.repository.PassageiroRepository;
import br.com.cwi.crescer.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.ValidationException;
import java.util.Optional;

@Service
public class DepositarService {

    @Autowired
    private PassageiroRepository passageiroRepository;


    public void depositarDinheiro(Long id, double saldo, UserPrincipal userPrincipal) throws ValidationException {

        Optional <Passageiro> passageiro = passageiroRepository.findById(id);
        if (!passageiro.isPresent()) {
            throw new ValidationException("Não existe passageiro");
        }

        Passageiro passageiroValido = passageiro.get();

        if(!passageiroValido.getId().equals(userPrincipal.getId())){
            throw new ValidationException("Esta não é sua conta!");
        }

        passageiroValido.setSaldo(passageiroValido.getSaldo() + saldo);

        passageiroRepository.save(passageiroValido);

    }
}
