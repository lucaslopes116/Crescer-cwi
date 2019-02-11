package br.com.cwi.crescer.domain.identificador;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public enum Perfil {

    ADMINISTRADOR("ROLE_ADMIN"),

    MOTORISTA("ROLE_MOTORISTA"),

    PASSAGEIRO("ROLE_PASSAGEIRO");

    private final String role;

}
