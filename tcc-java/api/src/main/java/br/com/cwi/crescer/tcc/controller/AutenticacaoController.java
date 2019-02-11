package br.com.cwi.crescer.tcc.controller;

import br.com.cwi.crescer.tcc.controller.request.LoginRequest;
import br.com.cwi.crescer.tcc.controller.response.LoginResponse;
import br.com.cwi.crescer.tcc.security.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/public")
public class AutenticacaoController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest request) {

        String username = request.getEmail();
        String password = request.getSenha();

        String token = authenticationService.authenticate(username, password);

        return new LoginResponse(token);

    }

}
