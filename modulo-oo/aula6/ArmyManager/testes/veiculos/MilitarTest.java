package veiculos;

import militares.*;
import org.junit.jupiter.api.Test;
import veiculos.Helicoptero;
import veiculos.Veiculos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MilitarTest {

    @Test
    public void testaCriacaoHelicoptero() {

        LocalDate habilitacaoHelicoptero = LocalDate.of(2019,11,02);

        Guerreiro murdok = new PilotoHelicoptero(5500,habilitacaoHelicoptero);
        List<Guerreiro> tripulantes = new ArrayList<>();

        Veiculos helicoptero = new Helicoptero(murdok,tripulantes,50, 50 );

        assertNotNull(helicoptero);


    }

    @Test
    public void testaCriacaoAviao() {

        LocalDate habilitacaoAviao = LocalDate.of(2019,01,02);
        Guerreiro paolo = new PilotoAviao(1000,habilitacaoAviao );
        List<Guerreiro> tripulantes = new ArrayList<>();

        Veiculos aviao = new Aviao(paolo,tripulantes, 100, 5.6);

        assertNotNull(aviao);

    }

    @Test
    public void testaCriacaoTanque() {

        LocalDate habilitacaoTanque = LocalDate.of(2018,10,25);
        Guerreiro jorge = new PilotoTanque(4102,habilitacaoTanque );
        List<Guerreiro> tripulantes = new ArrayList<>();

        Veiculos tanque = new Tanque(jorge,tripulantes, 10, 50);

        assertNotNull(tanque);

    }

    @Test
    public void testaCriacaoCaminhao() {

        LocalDate habilitacaoCaminhao = LocalDate.of(2018,10,13);
        Guerreiro bino = new PilotoPilotoCaminhao(2500,habilitacaoCaminhao );
        List<Guerreiro> tripulantes = new ArrayList<>();

        Veiculos caminhao = new Caminhao(bino,tripulantes, 30, 4.65);

        assertNotNull(caminhao);

    }


}