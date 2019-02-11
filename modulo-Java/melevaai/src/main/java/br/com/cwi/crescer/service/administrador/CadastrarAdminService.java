package br.com.cwi.crescer.service.administrador;

import br.com.cwi.crescer.domain.pessoa.Administrador;
import br.com.cwi.crescer.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CadastrarAdminService {

    @Autowired
    private AdministradorRepository administradorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Administrador cadastrar(Administrador administrador){

        administrador.setAtivo(true);
        administrador.setSenha(passwordEncoder.encode(administrador.getSenha()));


        return administradorRepository.save(administrador);
    }
}
