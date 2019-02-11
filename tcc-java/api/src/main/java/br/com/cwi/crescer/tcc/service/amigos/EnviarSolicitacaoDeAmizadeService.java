package br.com.cwi.crescer.tcc.service.amigos;


import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import br.com.cwi.crescer.tcc.security.UserPrincipal;
import br.com.cwi.crescer.tcc.service.usuario.BuscarUsuarioPorId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.ValidationException;

@Service
public class EnviarSolicitacaoDeAmizadeService {

    @Autowired
    private AmigosRepository amigosRepository;

    @Autowired
    private BuscarUsuarioPorId buscarUsuarioPorId;


    public void solicitarAmizade(UserPrincipal userPrincipal, Long idUsuario) throws ValidationException {

        Usuario amigo = buscarUsuarioPorId.buscar(idUsuario);
        Usuario usuarioLogado = buscarUsuarioPorId.buscar(userPrincipal.getId());

        Amigos solicitacaoUsuario = new Amigos();
        Amigos solicitacaoAmigo = new Amigos();

        solicitacaoUsuario.setIdUsuario(usuarioLogado);
        solicitacaoUsuario.setIdAmigo(amigo);
        solicitacaoUsuario.setStatusAmizade(Status.PENDENTE);

        amigosRepository.save(solicitacaoUsuario);

        solicitacaoAmigo.setIdUsuario(amigo);
        solicitacaoAmigo.setIdAmigo(usuarioLogado);
        solicitacaoAmigo.setStatusAmizade(Status.PENDENTE);

        amigosRepository.save(solicitacaoAmigo);


    }
}
