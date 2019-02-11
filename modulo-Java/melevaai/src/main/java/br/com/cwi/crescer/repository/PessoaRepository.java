package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.pessoa.Pessoa;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PessoaRepository  extends CrudRepository<Pessoa,Long> {

    List<Pessoa> findAllByEmail(String email);


    Optional<Pessoa> findByEmail(String email);

    Optional<Pessoa> findById(Long id);
}
