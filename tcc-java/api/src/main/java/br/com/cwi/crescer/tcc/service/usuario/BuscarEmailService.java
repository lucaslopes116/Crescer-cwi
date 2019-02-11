package br.com.cwi.crescer.tcc.service.usuario;

import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.exception.ValidacaoNegocioException;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BuscarEmailService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void buscarEmail(String email){
        Optional<Usuario> usuarioOptional= usuarioRepository.findByEmail(email);

        if(usuarioOptional.isPresent()){
            throw new ValidacaoNegocioException("Email já existe!");
        }
    }
}
