package br.com.cwi.crescer.tcc.domain;


import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity
@SequenceGenerator(name="post", sequenceName = "identificadorpost", initialValue = 1,allocationSize = 1)
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post")
    @Column(name = "id_post")
    private Long id;
    private String tituloPost;
    private String descricaoPost;
    private String imagemPost;
    @Enumerated(value = EnumType.STRING)
    @Column(name = "Permissao")
    private TipoPermissao tipoPermissao;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDateTime dataPost = LocalDateTime.now();
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}
