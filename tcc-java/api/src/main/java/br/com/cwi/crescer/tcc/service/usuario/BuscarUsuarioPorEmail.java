package br.com.cwi.crescer.tcc.service.usuario;


import br.com.cwi.crescer.tcc.domain.dto.UsuarioDto;
import br.com.cwi.crescer.tcc.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BuscarUsuarioPorEmail {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Page<UsuarioDto> buscarUsuarioPorEmail(Long id, String email, Pageable pageable){
        return usuarioRepository.buscarUsuarioEmail(id,email,pageable);
    }
}
