package br.com.cwi.crescer.tcc.service.post;

import br.com.cwi.crescer.tcc.domain.Post;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.PostRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.usuario.BuscarUsuarioLogadoService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import java.time.LocalDate;
import java.util.Optional;


@MockitoSettings(strictness = Strictness.LENIENT)
@ExtendWith(MockitoExtension.class)
class CriarPostServiceTest {

    private Usuario usuario;
    private Post post;

    @BeforeEach
    void criarBase(){
        usuario = new Usuario();
        post = new Post();
        UserPrincipal userPrincipal;
        usuario.setId(1L);
        usuario.setEmail("lucas@cwi.com.br");
        post.setId(1L);
        post.setUsuario(usuario);
        String email = usuario.getEmail();
    }

    @InjectMocks
    CriarPostService criarPostService;

    @Mock
    PostRepository postRepository;

    @Mock
    BuscarUsuarioLogadoService buscarUsuarioLogadoService;


    @Test
    void TestarCriarPost(){
        UserPrincipal userPrincipal = new UserPrincipal(1L, null, null, null, null, null, null);

        Mockito.when(buscarUsuarioLogadoService.buscarPorId(userPrincipal)).thenReturn(Optional.of(usuario));

        Mockito.when(postRepository.save(post)).thenReturn(post);

        Assertions.assertNotNull(post);
    }


}