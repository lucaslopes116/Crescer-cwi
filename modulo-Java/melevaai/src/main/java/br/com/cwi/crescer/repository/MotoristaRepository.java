package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.pessoa.Motorista;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;


import java.util.List;
import java.util.Optional;


public interface MotoristaRepository extends PagingAndSortingRepository<Motorista,Long> {

     @Query("SELECT M FROM Motorista M WHERE M.ativo = true")
     Page<Motorista> findAll(Pageable pageable);

     void delete(Motorista motorista);

     Optional<Motorista> findById(Long id);

     Motorista save(Motorista motorista);

}
