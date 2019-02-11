package br.com.cwi.crescer.domain.pessoa;


import br.com.cwi.crescer.domain.veiculo.Veiculo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.Random;

@Getter
@Setter
@Entity
@SequenceGenerator(name="CORRIDA", sequenceName = "SEQ_CORRIDA", initialValue = 1,allocationSize = 1)

public class Corrida {

    private static final double PRECO_CORRIDA_MINUTO = 0.20;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CORRIDA")
    private Long id;
    private Long pontoInicial;
    private Long pontoFinal;
    @ManyToOne
    @JoinColumn(name = "id_passageiro")
    private Passageiro passageiro;
    @ManyToOne
    @JoinColumn(name = "id_veiculo")
    private Veiculo veiculo;
    @Column(columnDefinition = "NUMBER(19,2)")
    private double valorCorrida;
    @Column(name = "data_hora_inicio")
    private LocalDate dataInicioCorrida;
    @Column(name = "data_hora_fim")
    private LocalDate dataFimCorrida;
    @Column(name = "tempo_previsto")
    private int tempoEstimado;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Column(name = "avaliacao_passageiro")
    private int avaliacaoPassageoiro;
    private int avaliacaoMotorista;

    public int tempoRandom() {
        Random tempo = new Random();
        int tempoRandom = tempo.nextInt((30 - 10) + 1);
        return tempoRandom;
    }
    public double valorCorrida() {
        int tempoEstimado = tempoRandom();
        DecimalFormat formatador = new DecimalFormat("0.00");
        double valorEstimado = (tempoEstimado * PRECO_CORRIDA_MINUTO);

        return valorEstimado;
    }
}
