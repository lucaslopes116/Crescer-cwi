package br.com.cwi.crescer.domain;

import java.time.LocalDate;
import java.time.Period;

public class CalculaIdade{

        public int idade (LocalDate nascimento){
            return Period.between(nascimento, LocalDate.now()).getYears();
        }
    }
