//package br.com.cwi.crescer.domain.exception;
//
//import CarteiraDeHabilitacao;
//import CategoriaCnh;
//import Motorista;
//import Cor;
//import Marca;
//import Veiculo;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//
//import java.time.LocalDate;
//
//class MotoristaNaoHabilitadoExceptionTest {
//
//
//    @Test
//    void testaMotoristaComCategoriaDiferenteDoVeiculo() throws MotoristaNaoHabilitadoException {
//
//        Assertions.assertThrows(MotoristaNaoHabilitadoException.class, () -> {
//            Motorista motora = new Motorista();
//            Veiculo carro = new Veiculo(Marca.BMW, "BMW 120i Sport", 2017, Cor.Branco, CategoriaCnh.C, 5, motora);
//        });
//    }
//
//    @Test
//    void testaMotoristaComCategoriaEVeiculosCorretos() throws MotoristaNaoHabilitadoException {
//
//        Motorista motora = new Motorista();
//        Veiculo carro = new Veiculo(Marca.BMW, "BMW 120i Sport", 2017, Cor.Branco, CategoriaCnh.B, 5, motora);
//
//        Assertions.assertNotNull(carro);
//    }
//
//    @Test
//    void testaMotoristaComCategoriaEVeiculosDiferentesCategorias() throws MotoristaNaoHabilitadoException {
//
//
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
//        Veiculo carro = new Veiculo(Marca.BMW, "BMW 120i Sport", 2017, Cor.Branco, CategoriaCnh.A, 5, motora);
//        Veiculo carro2 = new Veiculo(Marca.FIAT, "UNO", 1995, Cor.Preto, CategoriaCnh.ACC, 4, motora);
//        Veiculo carro3 = new Veiculo(Marca.AUDI, "TT", 2000, Cor.Prata, CategoriaCnh.B, 4, motora);
//
//        Assertions.assertNotNull(carro);
//        Assertions.assertNotNull(carro2);
//        Assertions.assertNotNull(carro3);
//    }
//
//}