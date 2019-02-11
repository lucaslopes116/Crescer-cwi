package br.com.cwi.crescer.tcc.controller;


import br.com.cwi.crescer.tcc.controller.request.PostRequest;
import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.identificador.TipoPermissao;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.post.CriarPostService;
import br.com.cwi.crescer.tcc.service.post.ListarTodosOsPost;
import br.com.cwi.crescer.tcc.service.post.ListarTodosPostDoUsuarioESeusAmigosService;
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

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private CriarPostService criarPostService;

    @Autowired
    private ListarTodosPostDoUsuarioESeusAmigosService listarTodosPostDoUsuarioESeusAmigosService;

    @Autowired
    private ListarTodosOsPost listarTodosOsPost;


    @PostMapping
    @ApiOperation("Permite criar novos posts")
    @ApiResponses({@ApiResponse(code = 201, message = "Sucesso"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public ResponseEntity<Post> criar(@AuthenticationPrincipal UserPrincipal userPrincipal, @RequestBody PostRequest postRequest){

        Post novoPost = new Post();
        novoPost.setDescricaoPost(postRequest.getDescricaoPost());
        novoPost.setImagemPost(postRequest.getImagemPost());
        novoPost.setTipoPermissao(TipoPermissao.PUBLICO);
        novoPost.setTituloPost(postRequest.getTituloPost());
        novoPost.setDataPost(postRequest.getDataPost());

        criarPostService.criar(novoPost,userPrincipal);

        return ResponseEntity.status(HttpStatus.CREATED).body(novoPost);
    }


    @GetMapping("/amigos")
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public Page<Post> listar(@PageableDefault(sort = "dataPost")Pageable pageable, UserPrincipal userPrincipal){
        return listarTodosPostDoUsuarioESeusAmigosService.listarPostsTodosUsuarios(userPrincipal.getId(), pageable);
    }

    @GetMapping
    @ApiResponses({@ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 400, message = "BAD REQUEST")})
    public Page<Post> listarTodosPost(@PageableDefault(sort = "dataPost")Pageable pageable){
        return listarTodosOsPost.listar(pageable);
    }
}
