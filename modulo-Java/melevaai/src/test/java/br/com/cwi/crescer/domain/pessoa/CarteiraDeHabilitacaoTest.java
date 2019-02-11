package br.com.cwi.crescer.domain.pessoa;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class CarteiraDeHabilitacaoTest {

    @Test
    void testaTipoDeCategoriaEDescricaoHabilitacao() {

        CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
        cnh.setCategoria(CategoriaCnh.A);


        Assertions.assertEquals(CategoriaCnh.A, cnh.getCategoria());
        Assertions.assertEquals("Todos os veículos automotores e elétricos, de duas ou três rodas, com ou sem carro lateral", cnh.getCategoria().getDescricao());
    }

    @Test
    void testaTipoDeDocumentoHabilitacao() {

        CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
        cnh.setNumeroDoDocumento("123133131231");

        Assertions.assertEquals("123133131231", cnh.getNumeroDoDocumento());
    }

}