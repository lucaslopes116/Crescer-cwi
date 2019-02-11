package br.com.cwi.crescer.controller;


import br.com.cwi.crescer.controller.request.VeiculoRequest;
import br.com.cwi.crescer.domain.veiculo.Veiculo;
import br.com.cwi.crescer.service.veiculo.BuscarVeiculoPorId;
import br.com.cwi.crescer.service.veiculo.CadastrarVeiculoService;
import br.com.cwi.crescer.service.veiculo.DeletarVeiculoService;
import br.com.cwi.crescer.service.veiculo.ListarVeiculoService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private CadastrarVeiculoService cadastrarVeiculoService;

    @Autowired
    private ListarVeiculoService listarVeiculoService;

    @Autowired
    private BuscarVeiculoPorId buscarVeiculoPorId;

    @Autowired
    private DeletarVeiculoService deletarVeiculoService;

    @RolesAllowed({"ROLE_ADMIN","ROLE_MOTORISTA"})
    @PostMapping
    @ApiOperation("Permite adicionar veiculos ao Me Leva Aí")
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Veiculo> cadastrar(@RequestBody VeiculoRequest novoVeiculoRequest) {

        Veiculo novoVeiculo = new Veiculo();
        novoVeiculo.setModelo(novoVeiculoRequest.getModelo());
        novoVeiculo.setMarca(novoVeiculoRequest.getMarca());
        novoVeiculo.setCor(novoVeiculoRequest.getCor());
        novoVeiculo.setAno(novoVeiculoRequest.getAno());
        novoVeiculo.setCategoriaCnh(novoVeiculoRequest.getCategoriaCnh());
        novoVeiculo.setQuantidadeDeLugares(novoVeiculoRequest.getQuantidadeDeLugares());
        novoVeiculo.setFoto(novoVeiculoRequest.getFoto());
        novoVeiculo.setPlaca(novoVeiculoRequest.getPlaca());
        cadastrarVeiculoService.cadastrar(novoVeiculoRequest.getIdMotorista(),novoVeiculo);

        return ResponseEntity.status(HttpStatus.CREATED).body(novoVeiculo);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping
    public ResponseEntity<Page<Veiculo>> listar(@PageableDefault(sort = "ano")Pageable pageable) {
        return ResponseEntity.ok(listarVeiculoService.listarVeiculos(pageable));
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscar(@PathVariable("id") Long id) {

        return ResponseEntity.ok(buscarVeiculoPorId.buscarPorId(id));
    }

    @RolesAllowed("ROLE_ADMIN")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 404, message = "NOT FOUND")})
    @DeleteMapping("/{id}")
    public void deletarVeiculo(@PathVariable("id") Long idVeiculo) {

        Veiculo veiculo = buscarVeiculoPorId.buscarPorId(idVeiculo);
        deletarVeiculoService.deletarVeiculo(veiculo);
    }
}

