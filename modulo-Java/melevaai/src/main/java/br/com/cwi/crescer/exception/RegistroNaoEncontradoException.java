package br.com.cwi.crescer.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RegistroNaoEncontradoException extends RuntimeException {

    private static final long serialVersionUID = 683200305126850817L;

    public RegistroNaoEncontradoException(String recurso) {
        super(String.format("Registro (%s) não encontrado.", recurso));
    }

}

