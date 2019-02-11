package br.com.cwi.crescer.controller;

import br.com.cwi.crescer.domain.pessoa.Passageiro;
import br.com.cwi.crescer.security.UserPrincipal;
import br.com.cwi.crescer.service.passageiro.*;
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
@RequestMapping("/passageiros")
public class PassageiroController {

    @Autowired
    private CadastrarPassageiroService cadastrarPassageiroService;

    @Autowired
    private ListarPassageirosService listarPassageirosService;

    @Autowired
    private DeletarPassageiroService deletarPassageiroService;

    @Autowired
    private BuscarPassageiroPorId buscarPassageiroPorId;

    @Autowired
    private DepositarService depositarService;

    @PostMapping
    @ApiOperation("Permite adicionar passageiro ao Me Leva Aí")
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Passageiro> cadastrar(@RequestBody @Valid Passageiro novoPassageiro) {

        return ResponseEntity.status(HttpStatus.CREATED).body(cadastrarPassageiroService.cadastrarPassageiro(novoPassageiro));
    }

    @RolesAllowed({"ROLE_ADMIN","ROLE_PASSAGEIRO"})
    @PutMapping("{id}/conta-virtual")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> depositarDinheiro(@PathVariable("id") Long id, @RequestParam("saldo") double saldo, @AuthenticationPrincipal UserPrincipal userPrincipal) throws ValidationException {

        depositarService.depositarDinheiro(id,saldo,userPrincipal);

        return ResponseEntity.ok().build();
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping
    public Page<Passageiro> listar(@PageableDefault(sort = "dataNascimento") Pageable pageable) {
        return listarPassageirosService.listar(pageable);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/{id}")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Passageiro> buscar(@PathVariable("id") Long id) {

        buscarPassageiroPorId.buscarPorId(id);

      return ResponseEntity.ok().build();
    }

    @RolesAllowed("ROLE_ADMIN")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 404, message = "NOT FOUND")})
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarPassageiro(@PathVariable("id") Long idPassageiro) {

        Passageiro passageiro = buscarPassageiroPorId.buscarPorId(idPassageiro);
        deletarPassageiroService.deletarPassageiro(passageiro);

        return ResponseEntity.ok().build();
    }
}
