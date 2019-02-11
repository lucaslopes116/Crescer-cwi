package br.com.cwi.crescer.tcc.service.usuario;

import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.security.crypto.password.PasswordEncoder;

@MockitoSettings(strictness = Strictness.LENIENT)
@ExtendWith(MockitoExtension.class)
class CadastrarUsuarioServiceTest {

    private Usuario usuario;

    @BeforeEach
    void criarBase(){
        usuario = new Usuario();
        usuario.setId(1L);
        usuario.setEmail("lucas@cwi.com.br");
        String email = usuario.getEmail();
    }

    @InjectMocks
    CadastrarUsuarioService cadastrarUsuarioService;

    @Mock
    BuscarEmailService buscarEmailService;

    @Mock
    UsuarioRepository usuarioRepository;

    @Mock
    PasswordEncoder passwordEncoder;

    @Captor
    ArgumentCaptor<Usuario> argumentCaptor;

    @Test
    void cadastrarNovoUsuario(){
        String email = usuario.getEmail();
        usuario.setSenha("abc");
        Mockito.doNothing().when(buscarEmailService).buscarEmail(email);

        Usuario novoUsuario = new Usuario();

        Mockito.when(passwordEncoder.encode("abc")).thenReturn("123");
        Mockito.when(usuarioRepository.save(novoUsuario)).thenReturn(novoUsuario);
        cadastrarUsuarioService.cadastrar(usuario);

        Mockito.verify(usuarioRepository, Mockito.times(1)).save(argumentCaptor.capture());

        Usuario u = argumentCaptor.getValue();

        Assertions.assertEquals("123",u.getSenha());
        Assertions.assertEquals(u,usuario);


    }

}