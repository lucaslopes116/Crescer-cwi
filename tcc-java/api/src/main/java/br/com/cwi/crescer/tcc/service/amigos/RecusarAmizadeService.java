package br.com.cwi.crescer.tcc.service.amigos;


import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecusarAmizadeService {


    @Autowired
    private AmigosRepository amigosRepository;

    public void desfazerAmizade(Amigos amizade) {
        amigosRepository.delete(amizade);
    }
}
