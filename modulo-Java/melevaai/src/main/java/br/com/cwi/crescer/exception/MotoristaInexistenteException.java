package br.com.cwi.crescer.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MotoristaInexistenteException extends RuntimeException {
    public MotoristaInexistenteException(String message) {
        super(message);
    }

}
