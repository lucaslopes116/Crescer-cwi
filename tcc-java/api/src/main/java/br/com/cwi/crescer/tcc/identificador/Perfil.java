package br.com.cwi.crescer.tcc.identificador;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public enum Perfil {

    ADMINISTRADOR("ROLE_ADMIN"),
    USUARIO("ROLE_USUARIO");

    private final String role;

}
