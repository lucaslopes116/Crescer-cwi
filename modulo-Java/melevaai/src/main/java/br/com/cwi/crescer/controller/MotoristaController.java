package br.com.cwi.crescer.controller;


import br.com.cwi.crescer.domain.pessoa.Motorista;
import br.com.cwi.crescer.security.UserPrincipal;
import br.com.cwi.crescer.service.motorista.CadastrarMotoristaService;
import br.com.cwi.crescer.service.motorista.*;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
import javax.xml.bind.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/motoristas")
public class MotoristaController {

    @Autowired
    private SacarDinheiroService sacarDinheiroService;

    @Autowired
    private DeletarMotoristaService deletarMotoristaService;

    @Autowired
    private BuscarMotoristaIdService buscarMotoristaIdService;

    @Autowired
    private ListarTodosMotoristasService listarTodosMotoristasService;

    @Autowired
    private CadastrarMotoristaService cadastrarMotoristaService;


    @PostMapping
    @ApiOperation("Permite adicionar motorista ao Me Leva Aí")
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Motorista> cadastrar(@RequestBody @Valid Motorista novoMotorista) throws ValidationException {

        return ResponseEntity.status(HttpStatus.CREATED).body(cadastrarMotoristaService.cadastrar(novoMotorista));

    }

    @RolesAllowed({"ROLE_MOTORISTA","ROLE_ADMIN"})
    @PutMapping("/conta-virtual")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> sacarDinheiro(@RequestParam("saldo") double saldo, @AuthenticationPrincipal UserPrincipal userPrincipal) throws ValidationException {

        sacarDinheiroService.sacarDinheiro(saldo,userPrincipal);
        return ResponseEntity.ok().build();
    }


    @RolesAllowed("ROLE_ADMIN")
    @GetMapping
    public Page<Motorista> listar(@PageableDefault(sort = "nome") Pageable pageable) {
        return listarTodosMotoristasService.listar(pageable);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/{id}")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Motorista> buscar(@PathVariable("id") Long id) {

       return ResponseEntity.ok(buscarMotoristaIdService.buscarPorId(id));

    }

    @RolesAllowed("ROLE_ADMIN")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 404, message = "NOT FOUND")})
    @DeleteMapping("/{id}")
    public ResponseEntity<Motorista> deletarMotorista(@PathVariable("id") Long idMotorista) {

        Motorista motorista = buscarMotoristaIdService.buscarPorId(idMotorista);
        deletarMotoristaService.sairDoServico(motorista);

        return ResponseEntity.notFound().build();
    }
}
