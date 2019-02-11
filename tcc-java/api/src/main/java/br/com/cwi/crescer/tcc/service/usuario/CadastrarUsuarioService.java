package br.com.cwi.crescer.tcc.service.usuario;


import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CadastrarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BuscarEmailService buscarEmailService;

    public Usuario cadastrar(Usuario novoUsuario){
       buscarEmailService.buscarEmail(novoUsuario.getEmail());
       novoUsuario.setSenha(passwordEncoder.encode(novoUsuario.getSenha()));
       novoUsuario.getPerfil();
        return usuarioRepository.save(novoUsuario);
    }
}
