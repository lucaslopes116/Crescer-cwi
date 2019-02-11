package br.com.cwi.crescer.tcc.service.amigos;


import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.identificador.Status;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AceitarAmizadeService {

    @Autowired
    public AmigosRepository amigosRepository;

    public void aceitarAmizade(Amigos amigos){

        amigos.setStatusAmizade(Status.AMIGO);
        amigosRepository.save(amigos);
    }
}
