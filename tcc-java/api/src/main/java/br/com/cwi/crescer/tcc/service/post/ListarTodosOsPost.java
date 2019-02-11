package br.com.cwi.crescer.tcc.service.post;

import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarTodosOsPost {

    @Autowired
    private PostRepository postRepository;

    public Page<Post>listar(Pageable pageable){
      return   postRepository.findAll(pageable);
    }
}
