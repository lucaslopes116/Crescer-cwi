//package br.com.cwi.crescer.domain.veiculo;
//
//import CarteiraDeHabilitacao;
//import CategoriaCnh;
//import Motorista;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import java.time.LocalDate;
//
//class VeiculoTest {
//
//    private Veiculo carro;
//    private Motorista motora;
//
//    @BeforeEach
//    void criaVeiculoEMotorista() throws MotoristaNaoHabilitadoException {
//
//        motora = new Motorista();
//        Motorista motora = new Motorista();
//        CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
//        cnh.setCategoria(CategoriaCnh.B);
//        cnh.setNumeroDoDocumento("123132313");
//
//        motora.setNome("Lucas Fernando");
//        motora.setCarteiraDeHabilitacao(cnh);
//        motora.setDataNascimento(LocalDate.of(1990,11,06));
//        motora.setEmail("lucas@cwi.com.br");
//        motora.setId(Long.valueOf(1));
//        carro = new Veiculo(Marca.BMW, "BMW 120i Sport", 2017, Cor.Branco, CategoriaCnh.B, 5, motora);
//    }
//
//    @Test
//    void criaVeiculo() {
//
//        Assertions.assertNotNull(carro);
//    }
//
//    @Test
//    void testaAnoVeiculo() {
//
//        Assertions.assertEquals(2017, carro.getAno());
//    }
//
//    @Test
//    void testaCategoriaCnhVeiculo() {
//
//        Assertions.assertEquals(CategoriaCnh.B, carro.getCategoriaCnh());
//    }
//
//    @Test
//    void testaCorVeiculo() {
//
//        Assertions.assertEquals(Cor.Branco, carro.getCor());
//    }
//
//    @Test
//    void testaMarcaVeiculo() {
//
//        Assertions.assertEquals(Marca.BMW, carro.getMarca());
//    }
//
//    @Test
//    void testaModeloVeiculo() {
//
//        Assertions.assertEquals("BMW 120i Sport", carro.getModelo());
//    }
//
//
//    @Test
//    void testaMotoristaVeiculo() {
//
//        Assertions.assertEquals(motora, carro.getMotorista());
//    }
//
//    @Test
//    void testaQuantidadeDeLugarVeiculo() {
//
//        Assertions.assertEquals(5, carro.getQuantidadeDeLugares());
//    }
//}