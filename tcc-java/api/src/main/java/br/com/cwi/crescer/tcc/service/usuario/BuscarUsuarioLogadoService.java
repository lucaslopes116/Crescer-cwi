package br.com.cwi.crescer.tcc.service.usuario;

import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.post.ListarTodosPostDoUsuarioESeusAmigosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BuscarUsuarioLogadoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ListarTodosPostDoUsuarioESeusAmigosService listarTodosPostDoUsuarioESeusAmigosService;

    public Optional<Usuario> buscarPorId(UserPrincipal userPrincipal){
        return usuarioRepository.findById(userPrincipal.getId());

    }
}
