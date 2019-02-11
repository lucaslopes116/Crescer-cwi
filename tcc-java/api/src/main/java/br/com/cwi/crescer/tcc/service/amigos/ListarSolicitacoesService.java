package br.com.cwi.crescer.tcc.service.amigos;


import br.com.cwi.crescer.tcc.domain.Amigos;
import br.com.cwi.crescer.tcc.repository.AmigosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarSolicitacoesService {

    @Autowired
    private AmigosRepository amigosRepository;


    Page<Amigos> Solicitacoes(Long idUser, Pageable pageable) {

        return amigosRepository.buscarSolicitacoes(idUser,pageable);
    }





}
