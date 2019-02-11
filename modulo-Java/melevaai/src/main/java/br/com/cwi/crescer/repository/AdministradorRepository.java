package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.pessoa.Administrador;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface AdministradorRepository extends PagingAndSortingRepository<Administrador,Long> {

        Page<Administrador> findAll(Pageable pageable);

        void delete(Administrador administrador);

        Optional<Administrador> findById(Long id);

        Administrador save(Administrador administrador);


}

