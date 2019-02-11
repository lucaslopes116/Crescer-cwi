package br.com.cwi.crescer.service.motorista;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CadastrarMotoristaService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public Motorista cadastrar(Motorista novoMotorista) {
        if (!novoMotorista.possuiIdadeMinimaParaDirigir()) {
            throw new ValidacaoNegocioException("O motorista não possui a idade mínima necessária segundo a legislação brasileira.");
        }

        if (novoMotorista.getCarteiraDeHabilitacao().estaVencida()) {
            throw new ValidacaoNegocioException("A CNH do motorista não pode estar vencida.");
        }

        novoMotorista.setAtivo(Boolean.TRUE);
        novoMotorista.setSenha(passwordEncoder.encode(novoMotorista.getSenha()));
        return motoristaRepository.save(novoMotorista);
    }
}
