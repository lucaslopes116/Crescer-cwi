package br.com.cwi.crescer.tcc.repository;

import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.domain.dto.UsuarioDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UsuarioRepository extends PagingAndSortingRepository<Usuario,Long> {

    Usuario save(Usuario usuario);

    Optional<Usuario> findById(Long id);

    Optional<Usuario> findByEmail(String email);

    Page<Usuario> findAll(Pageable pageable);

    @Query("SELECT new br.com.cwi.crescer.tcc.domain.dto.UsuarioDto(u.id, u.nomeCompleto, u.email, u.dataNascimento, u.fotoPerfil) FROM Usuario u where u.id in (Select a.idAmigo.id from Amigos a where a.idUsuario.id=?1) and u.nomeCompleto like %?2%")
    Page<UsuarioDto> buscarUsuarioNome(Long idUsuario, String nome, Pageable pageable);

    @Query("SELECT new br.com.cwi.crescer.tcc.domain.dto.UsuarioDto(u.id, u.nomeCompleto, u.email, u.dataNascimento, u.fotoPerfil) FROM Usuario u where u.id in (Select a.idAmigo.id from Amigos a where a.idUsuario.id=?1) and u.email like %?2%")
    Page<UsuarioDto> buscarUsuarioEmail(Long idUsuario, String email, Pageable pageable);

    public Optional<Usuario> findById(long idUsuario);
}
