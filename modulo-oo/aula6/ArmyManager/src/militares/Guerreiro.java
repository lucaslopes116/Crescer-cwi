package militares;

import java.time.LocalDate;
import java.util.Date;

public abstract class Guerreiro {

    private double salario;


    public Guerreiro(double salario) {
        this.salario = salario;
    }


    public double getSalario() {
        return salario;
    }


}


