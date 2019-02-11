package br.com.cwi.crescer.controller;

import br.com.cwi.crescer.domain.pessoa.Administrador;
import br.com.cwi.crescer.repository.AdministradorRepository;

import br.com.cwi.crescer.service.administrador.CadastrarAdminService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.ValidationException;

@RestController
@RequestMapping("/administrador")
public class AdministradorController {

        @Autowired
        private AdministradorRepository administradorRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Autowired
        private CadastrarAdminService cadastrarAdminService;


        @PostMapping
        @ApiOperation("Permite criar uma conta administrador ao Me Leva Aí")
        @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
        public ResponseEntity<Administrador> cadastrar(@RequestBody @Valid Administrador administrador) throws ValidationException {

            return ResponseEntity.status(HttpStatus.CREATED).body(cadastrarAdminService.cadastrar(administrador));

        }


}


