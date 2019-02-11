package br.com.cwi.crescer.tcc.controller;


import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.domain.dto.UsuarioDto;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.usuario.*;
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

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private CadastrarUsuarioService cadastrarUsuarioService;

    @Autowired
    private BuscarUsuarioLogadoService buscarUsuarioLogadoService;

    @Autowired
    private ListarTodosUsuariosService listarTodosUsuariosService;

    @Autowired
    private BuscarUsuarioPorNome buscarUsuarioPorNome;

    @Autowired
    private BuscarUsuarioPorEmail buscarUsuarioPorEmail;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BuscarUsuarioPorId buscarUsuarioPorId;


    @PostMapping
    @ApiOperation("Permite cadastrar um novo usuário")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Usuario> cadastrar(@RequestBody @Valid Usuario novoUsuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(cadastrarUsuarioService.cadastrar(novoUsuario));
    }


    @RolesAllowed("ROLE_USUARIO")
    @GetMapping("/usuarios")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public Page<Usuario> listar(@PageableDefault(sort = "nomeCompleto")Pageable pageable){
        return listarTodosUsuariosService.listarUsuarios(pageable);
    }

    @RolesAllowed("ROLE_USUARIO")
    @GetMapping
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public Usuario buscar(@AuthenticationPrincipal UserPrincipal userPrincipal){
        return buscarUsuarioLogadoService.buscarPorId(userPrincipal).get();
    }

    @GetMapping("/nome")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    Page<UsuarioDto> buscarUsuarioNome(@AuthenticationPrincipal Long id,String nome, Pageable pageable){
        return buscarUsuarioPorNome.buscarUsuario(id,nome,pageable);
    }

    @GetMapping("/email")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    Page<UsuarioDto> buscarUsuarioEmail(@AuthenticationPrincipal Long id,String email, Pageable pageable){
        return buscarUsuarioPorEmail.buscarUsuarioPorEmail(id,email,pageable);
    }

    @GetMapping("/todos")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    Page<Usuario> buscarTodos( Pageable pageable){
        return usuarioRepository.findAll(pageable);
    }

    @GetMapping("/id/{idUsuario}")
    public Usuario buscarUsuario(@PathVariable("idUsuario") long idUsuario) throws ValidationException {
        return buscarUsuarioPorId.buscar(idUsuario);
    }
}
