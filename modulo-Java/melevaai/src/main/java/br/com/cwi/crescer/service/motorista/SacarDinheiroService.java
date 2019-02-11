package br.com.cwi.crescer.service.motorista;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.repository.MotoristaRepository;
import br.com.cwi.crescer.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.ValidationException;

@Service
public class SacarDinheiroService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    @Autowired
    private BuscarMotoristaIdService buscarMotoristaIdService;


    public void sacarDinheiro(double saldo, UserPrincipal userPrincipal) throws ValidationException {

        Motorista motorista = buscarMotoristaIdService.buscarPorId(userPrincipal.getId());

        if (motorista == null) {
            throw new ValidationException("Não existe motorista");        }


        if (saldo > motorista.getSaldo()) {
            throw new ValidationException("Saque inválido");
        }

        motorista.setSaldo(motorista.getSaldo() + saldo);
        motoristaRepository.save(motorista);

    }
}
