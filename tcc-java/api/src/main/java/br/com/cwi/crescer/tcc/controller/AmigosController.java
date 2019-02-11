package br.com.cwi.crescer.tcc.controller;


import br.com.cwi.crescer.tcc.controller.request.AmizadeRequest;
import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.amigos.AceitarAmizadeService;
import br.com.cwi.crescer.tcc.service.amigos.EnviarSolicitacaoDeAmizadeService;
import br.com.cwi.crescer.tcc.service.amigos.RecusarAmizadeService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.xml.bind.ValidationException;

@RestController
@RequestMapping("/amigos")
public class AmigosController {

    @Autowired
    private EnviarSolicitacaoDeAmizadeService enviarSolicitacaoDeAmizadeService;

    @Autowired
    private AceitarAmizadeService aceitarAmizadeService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AmigosRepository amigosRepository;

    @Autowired
    private RecusarAmizadeService recusarAmizadeService;

    @RolesAllowed("ROLE_USUARIO")
    @PostMapping("/{id}")
    @ApiOperation("Permite enviar solicitacao de amizade")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<?> solicitacaoAmizade (@AuthenticationPrincipal UserPrincipal userPrincipal, @PathVariable("id") Long idUsuario) throws ValidationException {

        enviarSolicitacaoDeAmizadeService.solicitarAmizade(userPrincipal,idUsuario);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @ApiOperation("Permite aceitar a solicitacao de amizade")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    @PutMapping
    public ResponseEntity<?> aceitarSolicitacaoDeAmizade(@RequestBody AmizadeRequest amizadeRequest) {
        Usuario usuarioLogado = usuarioRepository.findById(amizadeRequest.getIdUsuario()).get();
        Usuario amigo = usuarioRepository.findById(amizadeRequest.getIdAmigo()).get();
        Amigos amigosUsuarioLocal = amigosRepository.buscarSitucaoDeDoisAmigos(usuarioLogado, amigo, Status.PENDENTE).get();
        aceitarAmizadeService.aceitarAmizade(amigosUsuarioLocal);
        Amigos amigosUsuarioRede = amigosRepository.buscarSitucaoDeDoisAmigos(amigo, usuarioLogado, Status.PENDENTE).get();
        aceitarAmizadeService.aceitarAmizade(amigosUsuarioRede);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @ApiOperation("Permite aceitar a solicitacao de amizade")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    @PutMapping("/recusarAmizade")
    public ResponseEntity<?> recusarSolicitacaoDeAmizade(@RequestBody AmizadeRequest amizadeRequest) {
        Usuario usuarioLogado = usuarioRepository.findById(amizadeRequest.getIdUsuario()).get();
        Usuario amigo = usuarioRepository.findById(amizadeRequest.getIdAmigo()).get();
        Amigos amigosUsuarioLocal = amigosRepository.buscarSitucaoDeDoisAmigos(usuarioLogado, amigo, Status.PENDENTE).get();
        recusarAmizadeService.desfazerAmizade(amigosUsuarioLocal);
        Amigos amigosUsuarioRede = amigosRepository.buscarSitucaoDeDoisAmigos(amigo, usuarioLogado, Status.PENDENTE).get();
        recusarAmizadeService.desfazerAmizade(amigosUsuarioRede);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping()
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public Page<Amigos> listarSolicitacao(@AuthenticationPrincipal UserPrincipal userPrincipal, Pageable pageable){
        return amigosRepository.buscarSolicitacoes(userPrincipal.getId(),pageable);
    }
}
