package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.veiculo.Veiculo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;


import java.util.List;
import java.util.Optional;


public interface VeiculoRepository extends PagingAndSortingRepository<Veiculo,Long> {

     Veiculo save(Veiculo veiculo);

     Optional<Veiculo> findById(Long id);

     void delete(Veiculo veiculo);

     Page<Veiculo> findAll(Pageable pageable);

     @Query(value = "SELECT * FROM ( select * from veiculo v inner join MOTORISTA M on M.id = v.id_motorista where m.ocupado = '0') where rownum = 1", nativeQuery = true)
     Veiculo findByMotorista_OcupadoTrue();


}
