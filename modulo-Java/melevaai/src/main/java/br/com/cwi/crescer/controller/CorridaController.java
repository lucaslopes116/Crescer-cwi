package br.com.cwi.crescer.controller;

import br.com.cwi.crescer.domain.dto.Projecao;
import br.com.cwi.crescer.domain.pessoa.Corrida;
import br.com.cwi.crescer.security.UserPrincipal;
import br.com.cwi.crescer.service.corrida.*;
import br.com.cwi.crescer.service.dto.ProjecaoService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.xml.bind.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/corridas")
public class CorridaController {

    @Autowired
    private ChamarCorridaService chamarCorridaService;

    @Autowired
    private IniciarCorridaService iniciarCorridaService;

    @Autowired
    private ListarCorridaService listarCorridaService;

    @Autowired
    private EncerrarCorridaService encerrarCorridaService;

    @Autowired
    private ListarCorridaDePassageiroPorId listarCorridaDePassageiroPorId;

    @Autowired
    private AvaliacaoPassageiroService avaliacaoPassageiroService;

    @Autowired
    private AvaliacaoMotoristaService avaliacaoMotoristaService;

    @Autowired
    private ProjecaoService projecaoService;

    @PostMapping("/passageiros")
    @ApiOperation("Permite que o passageiro chame uma corrida")
    @RolesAllowed({"ROLE_PASSAGEIRO","ROLE_ADMIN"})
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Corrida> chamarCorrida(@AuthenticationPrincipal UserPrincipal userPrincipal, @RequestBody Corrida corrida) {

        return ResponseEntity.status(HttpStatus.CREATED).body(chamarCorridaService.chamarCorrida(corrida,userPrincipal));
    }


    @PostMapping("/{id}")
    @ApiOperation("Permite que o motorista inicie uma corrida")
    @RolesAllowed({"ROLE_MOTORISTA","ROLE_ADMIN"})
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> iniciarCorrida(@PathVariable("id") Long id) {

        return ResponseEntity.status(HttpStatus.CREATED).body(iniciarCorridaService.iniciarCorrida(id));

    }

    @PutMapping("/{id}")
    @ApiOperation("Permite que o motorista encerre uma corrida")
    @RolesAllowed({"ROLE_MOTORISTA","ROLE_ADMIN"})
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> encerrarCorrida(@RequestBody @PathVariable("id") Long id) {

        encerrarCorridaService.encerrarCorrida(id);

        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/passageiros")
    public ResponseEntity<List<Corrida>> listarCorrida() {
        return ResponseEntity.ok(listarCorridaService.listarCorrida());
    }

    @RolesAllowed({"ROLE_PASSAGEIRO","ROLE_ADMIN"})
    @GetMapping("/passageiros/{id}")
    public ResponseEntity<?> buscar(@AuthenticationPrincipal UserPrincipal userPrincipal, @PathVariable("id") Long id) {

        return ResponseEntity.ok(listarCorridaDePassageiroPorId.listarCorridaDePassageiro(userPrincipal,id));
    }


    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/projecao")
    public Projecao buscarProjecao(Projecao projecao) {

        projecaoService.findAll();

        return projecao;
    }

    @PostMapping("/passageiros/avaliacao")
    @RolesAllowed({"ROLE_MOTORISTA","ROLE_ADMIN"})
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> avaliarPassageiro(@AuthenticationPrincipal UserPrincipal userPrincipal, @RequestParam("avaliacao") int avaliacao) throws ValidationException {

        avaliacaoPassageiroService.avaliarPassageiro(avaliacao,userPrincipal);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/motoristas/avaliacao")
    @RolesAllowed({"ROLE_PASSAGEIRO","ROLE_ADMIN"})
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> avaliarMotorista(@AuthenticationPrincipal UserPrincipal userPrincipal, @RequestParam("avaliacao") int avaliacao) throws ValidationException {

        avaliacaoMotoristaService.avaliarMotorista(avaliacao,userPrincipal);

        return ResponseEntity.ok().build();
    }
}

