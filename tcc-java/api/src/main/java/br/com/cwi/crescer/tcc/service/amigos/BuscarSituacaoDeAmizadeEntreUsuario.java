package br.com.cwi.crescer.tcc.service.amigos;


import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.domain.Usuario;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuscarSituacaoDeAmizadeEntreUsuario {

    @Autowired
    private AmigosRepository amigosRepository;

    public Amigos buscarSitucaoDeAmizade(Usuario usuarioLogado, Usuario amigo, Status status){
        return amigosRepository.buscarSitucaoDeDoisAmigos(usuarioLogado,amigo,status).get();
    }
}
