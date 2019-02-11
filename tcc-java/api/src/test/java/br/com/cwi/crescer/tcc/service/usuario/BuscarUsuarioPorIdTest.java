package br.com.cwi.crescer.tcc.service.usuario;

import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
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

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


@MockitoSettings(strictness = Strictness.LENIENT)
@ExtendWith(MockitoExtension.class)
class BuscarUsuarioPorIdTest {

    private Usuario usuario;

    @BeforeEach
    void criarBase(){
        usuario = new Usuario();
        usuario.setId(1L);
        usuario.setEmail("lucas@cwi.com.br");
        String email = usuario.getEmail();
    }

    @InjectMocks
    BuscarUsuarioPorId buscarUsuarioPorId;


    @Mock
    UsuarioRepository usuarioRepository;

    @Test
    void buscarUsuarioPorId(){

        Mockito.when(usuarioRepository.findById(1L)).thenReturn(Optional.of(usuario));

        Assertions.assertNotNull(usuario);

    }

}