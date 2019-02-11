package br.com.cwi.crescer.domain.pessoa;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.xml.bind.ValidationException;
import java.math.BigDecimal;

@NoArgsConstructor
@Getter
public class ContaVirtual {
    private BigDecimal saldo;

    public void depositar(BigDecimal saldo) throws ValidationException {
        if (new BigDecimal(0).compareTo(this.saldo) > 0) {
            throw new ValidationException("Deposito inválido");
        }

        this.saldo = this.saldo.add(saldo);
    }

    public void sacar(BigDecimal saldo) throws ValidationException {
        if (saldo.compareTo(this.saldo) > 0) {
            throw new ValidationException("Saque inválido");
        }

        this.saldo = this.saldo.subtract(saldo);
    }

}