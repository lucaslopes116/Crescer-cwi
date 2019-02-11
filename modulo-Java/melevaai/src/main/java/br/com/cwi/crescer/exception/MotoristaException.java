package br.com.cwi.crescer.exception;

public class MotoristaException extends RuntimeException {

    public MotoristaException(){
        super("Motorista com idade inferior ao permitido");
    }
}
