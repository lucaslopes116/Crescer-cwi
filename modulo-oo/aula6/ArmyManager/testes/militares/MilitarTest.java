package militares;

import org.junit.jupiter.api.Test;
import veiculos.Tanque;
import veiculos.Veiculos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MilitarTest {

    @Test
    public void testaSeCriaMilitar(){

        Guerreiro milico = new Militar(1000);

        assertNotNull(milico);
        assertEquals(1000,milico.getSalario());
    }

    @Test
    public void testaSeCriaPilotoAviao(){

        Guerreiro vuarvuar = new PilotoAviao(1000);

        assertNotNull(vuarvuar);
        assertEquals(1000,vuarvuar.getSalario());
    }

    @Test
    public void testaSeCriaPilotoHelicoptero(){

        Guerreiro murdok = new PilotoHelicoptero(1000);

        assertNotNull(murdok);
        assertEquals(1000,murdok.getSalario());
    }

    @Test
    public void testaSeCriaPilotoTanque(){

        Guerreiro general = new PilotoTanque(1000);

        assertNotNull(general);
        assertEquals(1000,general.getSalario());
    }

    @Test
    public void testaSeCriaEspecialistaAr(){

        LocalDate habilitacaoHelicoptero = LocalDate.now();
        LocalDate habilitacaoAviao = LocalDate.now();

        Guerreiro ases = new EspecialistaDoAr(1000,habilitacaoHelicoptero,habilitacaoAviao );

        assertNotNull(ases);
        assertEquals(1000,ases.getSalario());
    }

    @Test
    public void testaSeCriaEspecialistaTerra(){

        LocalDate habilitacaoTanque = LocalDate.now();
        LocalDate habilitacaoCaminhao = LocalDate.now();

        Guerreiro bino = new EspecialistaTerrestre(1000,habilitacaoTanque,habilitacaoCaminhao );

        assertNotNull(bino);
        assertEquals(1000,bino.getSalario());
    }

    @Test
    public void testaSeCriaElite(){

        LocalDate habilitacaoTanque = LocalDate.now();
        LocalDate habilitacaoCaminhao = LocalDate.now();
        LocalDate habilitacaoHelicoptero = LocalDate.now();
        LocalDate habilitacaoAviao = LocalDate.now();

        Guerreiro macgyver = new Elite(10000,habilitacaoTanque,habilitacaoCaminhao,habilitacaoHelicoptero ,habilitacaoAviao);

        assertNotNull(macgyver);
        assertEquals(10000,macgyver.getSalario());
    }

    @Test
    public void validaTripulacao(){

        LocalDate habilitacaoTanque = LocalDate.of(2018,9,18);

        List<Guerreiro> tripulantes = new ArrayList<>();

        tripulantes.add(new Militar(500));
        tripulantes.add(new Militar(500));
        tripulantes.add(new Militar(500));


        PilotoTanque brad = new PilotoTanque(1000,habilitacaoTanque);

        Veiculos fury = new Tanque(brad,tripulantes,10,5);

        assertTrue(fury.tripulacaoValida());
    }

}