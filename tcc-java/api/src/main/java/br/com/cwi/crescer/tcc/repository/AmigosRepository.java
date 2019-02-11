package br.com.cwi.crescer.tcc.repository;

import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.identificador.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface AmigosRepository extends PagingAndSortingRepository<Amigos,Long> {


        @Query("SELECT a FROM Amigos a WHERE a.idUsuario=?1 AND a.idAmigo=?2 AND a.statusAmizade=?3")
        Optional<Amigos> buscarSitucaoDeDoisAmigos(Usuario idUsuario, Usuario idAmigo, Status status);



        @Query("SELECT a FROM Amigos a WHERE a.idUsuario.id = ?1 AND a.statusAmizade like 'PENDENTE'")
        Page<Amigos> buscarSolicitacoes(Long idUser, Pageable pageable);




}
