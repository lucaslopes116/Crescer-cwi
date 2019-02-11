package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;


public interface PassageiroRepository extends PagingAndSortingRepository<Passageiro,Long> {

     Passageiro save(Passageiro passageiro);

     Optional<Passageiro> findById(Long id);

     void delete(Passageiro passageiro);

     Page<Passageiro> findAll(Pageable pageable);

}
