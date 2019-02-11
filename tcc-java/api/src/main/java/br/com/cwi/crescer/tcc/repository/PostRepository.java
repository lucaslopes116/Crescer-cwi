package br.com.cwi.crescer.tcc.repository;

import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.domain.dto.ListarPostUsuarioLogadoEAmigos;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Timer;

public interface PostRepository extends PagingAndSortingRepository<Post,Long> {

    Post save(Post novaPostagem);

    Page<Post> findAll(Pageable pageable);


    @Query("SELECT new br.com.cwi.crescer.tcc.domain.dto.ListarPostUsuarioLogadoEAmigos(p.id, p.tituloPost, p.descricaoPost, p.imagemPost, p.tipoPermissao, p.dataPost, p.usuario.nomeCompleto) FROM Post p where p.usuario.id=?1 or p.usuario.id in(Select a.idUsuario.id from Amigos a where a.idAmigo.id=?1 and p.tipoPermissao=?2 and a.statusAmizade=?3)")
    Page<ListarPostUsuarioLogadoEAmigos> buscarPostsParaHome(Long idUsuario, TipoPermissao permissao, Status status, Pageable pageable);

    @Query(value="SELECT * FROM POST P" +
            " WHERE PERMISSAO = 'PUBLICO'" +
            " AND ID_USUARIO IN " +
            "(SELECT ID_AMIGO FROM AMIGOS WHERE ID_USUARIO = ?1) ", nativeQuery = true)
     Page<Post> listarPostsTodosUsuarios(long idUsuario, Pageable pageable);



}
