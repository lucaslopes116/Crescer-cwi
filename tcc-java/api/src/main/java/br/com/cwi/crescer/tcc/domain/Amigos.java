package br.com.cwi.crescer.tcc.domain;


import br.com.cwi.crescer.tcc.identificador.Status;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@SequenceGenerator(name="amigos", sequenceName = "identificadoramigos", initialValue = 1,allocationSize = 1)
public class Amigos {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "amigos")
    private Long idAmigos;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario idUsuario;
    @ManyToOne
    @JoinColumn(name = "id_amigo")
    private Usuario idAmigo;
    @Enumerated(value = EnumType.STRING)
    @Column(name = "status_amizade")
    private Status statusAmizade;
}
