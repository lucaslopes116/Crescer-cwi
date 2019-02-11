package br.com.cwi.crescer.exception;

public class PassageiroException extends RuntimeException {

    public PassageiroException(){
        super("Passageiro com idade inferior ao permitido");
    }

}
