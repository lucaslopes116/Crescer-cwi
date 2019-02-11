package br.com.cwi.crescer.tcc.service.post;


import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.domain.dto.ListarPostUsuarioLogadoEAmigos;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import br.com.cwi.crescer.tcc.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarTodosPostDoUsuarioESeusAmigosService {

    @Autowired
    private PostRepository postRepository;

    public Page<Post> listarPostsTodosUsuarios(long idUsuario, Pageable pageable) {
        return  postRepository.listarPostsTodosUsuarios(idUsuario,pageable);
    }
}
