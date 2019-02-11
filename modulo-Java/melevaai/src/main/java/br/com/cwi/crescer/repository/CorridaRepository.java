package br.com.cwi.crescer.repository;

import br.com.cwi.crescer.domain.dto.Projecao;
import br.com.cwi.crescer.domain.pessoa.Corrida;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;


public interface CorridaRepository extends PagingAndSortingRepository<Corrida,Long> {

     Corrida save(Corrida corrida);

     Optional<Corrida> findById(Long id);

     List<Corrida> findAll();

     @Query("SELECT new br.com.cwi.crescer.domain.dto.Projecao(C.dataInicioCorrida, C.veiculo.motorista.nome, C.veiculo.placa, C.passageiro.nome, C.valorCorrida) FROM Corrida C")
     List<Projecao> relatorio();
}
