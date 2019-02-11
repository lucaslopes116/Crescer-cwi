package br.com.cwi.crescer.tcc.service.usuario;


import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.ValidationException;
import java.util.Optional;

@Service
public class BuscarUsuarioPorId {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscar(Long id) throws ValidationException {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        if(usuarioOptional.isPresent()){
            Usuario usuario = usuarioOptional.get();
            return usuario;
        }else{
            throw new ValidationException("Usuário não encontrado!");
        }
    }
}
