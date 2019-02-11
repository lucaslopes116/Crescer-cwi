//package br.com.cwi.crescer.domain.exception;
//
//import CalculaIdade;
//import CarteiraDeHabilitacao;
//import CategoriaCnh;
//import Motorista;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//
//import java.time.LocalDate;
//
//class MotoristaExceptionTest {
//
//    @Test
//    void motoristaComIdadeParaDirigir(){
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
//
//        CalculaIdade calculadora = new CalculaIdade();
//
//        calculadora.idade(motora.getDataNascimento());
//
//        Assertions.assertTrue(motora.verificaIdade());
//    }
//
//    @Test
//    void motoristaComIdadeImpropria() {
//
//        Assertions.assertThrows(MotoristaException.class, () -> {
//            Motorista motora2 = new Motorista();
//            CarteiraDeHabilitacao cnh = new CarteiraDeHabilitacao();
//            cnh.setCategoria(CategoriaCnh.B);
//            cnh.setNumeroDoDocumento("123132313");
//
//            motora2.setNome("Lucas Fernando");
//            motora2.setCarteiraDeHabilitacao(cnh);
//            motora2.setDataNascimento(LocalDate.of(2010,11,06));
//            motora2.setEmail("lucas@cwi.com.br");
//            motora2.setId(Long.valueOf(1));
//        });
//    }
//
//}