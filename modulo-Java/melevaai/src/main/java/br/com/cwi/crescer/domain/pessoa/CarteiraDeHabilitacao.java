package br.com.cwi.crescer.domain.pessoa;


import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@SequenceGenerator(name="CNH", sequenceName = "SEQ_CNH", initialValue = 1,allocationSize = 1)
@Table(name = "Carteira_nacional_habilitacao")
public class CarteiraDeHabilitacao {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CNH")
    private Long id;
    @Enumerated(value = EnumType.STRING)
    @Column(name = "Categoria")
    private CategoriaCnh categoria;
    @Column(name = "Numero")
    private String numeroDoDocumento;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dataVencimento;

    public boolean estaVencida() {
        return dataVencimento.isBefore(LocalDate.now());
    }


}
