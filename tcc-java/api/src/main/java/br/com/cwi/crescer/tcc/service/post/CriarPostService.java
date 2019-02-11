package br.com.cwi.crescer.tcc.service.post;


import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.PostRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.usuario.BuscarUsuarioLogadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CriarPostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private BuscarUsuarioLogadoService buscarUsuarioLogadoService;

    public Post criar(Post novaPostagem, UserPrincipal userPrincipal){

        Optional<Usuario> usuarioOptional = buscarUsuarioLogadoService.buscarPorId(userPrincipal);
        Usuario usuario = usuarioOptional.get();
        novaPostagem.setUsuario(usuario);

        return postRepository.save(novaPostagem);
    }
}
