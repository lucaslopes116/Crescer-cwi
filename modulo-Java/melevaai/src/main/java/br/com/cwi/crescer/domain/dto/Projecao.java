package br.com.cwi.crescer.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Projecao {

    private LocalDate dataCorrida;
    private String nomeMotorista;
    private String placa;
    private String nomePassageiro;
    private double custo;

}



