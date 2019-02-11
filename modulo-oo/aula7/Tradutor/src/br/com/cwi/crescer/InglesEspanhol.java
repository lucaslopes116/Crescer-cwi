package br.com.cwi.crescer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.Map;

public class InglesEspanhol {

    private Map<String, String> dicionarioPortugesIngles = new HashMap<String, String>();
    private Map<String, String> dicionarioPortuguesEspanhol = new HashMap<String, String>();



    public InglesEspanhol() {

        dicionarioPortugesIngles.put("você", "you");
        dicionarioPortugesIngles.put("diz", "say");
        dicionarioPortugesIngles.put("sim", "yes");
        dicionarioPortugesIngles.put("eu", "i");
        dicionarioPortugesIngles.put("digo", "say");
        dicionarioPortugesIngles.put("não", "no");
        dicionarioPortugesIngles.put("você", "you");
        dicionarioPortugesIngles.put("diz", "say");
        dicionarioPortugesIngles.put("pare", "stop");
        dicionarioPortugesIngles.put("e", "and");
        dicionarioPortugesIngles.put("eu", "i");
        dicionarioPortugesIngles.put("digo", "say");
        dicionarioPortugesIngles.put("vai", "go");
        dicionarioPortugesIngles.put("vai", "go");
        dicionarioPortugesIngles.put("vai", "go");

        dicionarioPortuguesEspanhol.put("você", "usted");
        dicionarioPortuguesEspanhol.put("diz", "dice");
        dicionarioPortuguesEspanhol.put("sim", "sí");
        dicionarioPortuguesEspanhol.put("eu", "yo");
        dicionarioPortuguesEspanhol.put("digo", "digo");
        dicionarioPortuguesEspanhol.put("não", "no");
        dicionarioPortuguesEspanhol.put("você", "usted");
        dicionarioPortuguesEspanhol.put("diz", "dice");
        dicionarioPortuguesEspanhol.put("pare", "parar");
        dicionarioPortuguesEspanhol.put("e", "y");
        dicionarioPortuguesEspanhol.put("eu", "yo");
        dicionarioPortuguesEspanhol.put("digo", "digo");
        dicionarioPortuguesEspanhol.put("vai", "va");
        dicionarioPortuguesEspanhol.put("vai", "va");
        dicionarioPortuguesEspanhol.put("vai", "va");
    }


    public String traduzirInglesEspanhol(String frase) throws PalavraNaoEncontradaException {

        StringBuilder frasePronta = new StringBuilder();

        for(String palavra : frase.split(" ")){

            if(traduzInglesEspanhol().get(palavra) != null){
                frasePronta.append(traduzInglesEspanhol().get(palavra));
                frasePronta.append(" ");
            }else{
                throw new PalavraNaoEncontradaException("Não foi possivel traduzir a palavra " + palavra);
            }
        }
        return frasePronta.toString();


    }

    private Map<String,String> traduzInglesEspanhol(){

        Map<String,String> inglesEspanhol = new HashMap<String, String>();

        for(Map.Entry<String,String> mapEntry : dicionarioPortugesIngles.entrySet()){

            if(dicionarioPortuguesEspanhol.get(mapEntry.getKey()) != null)
                inglesEspanhol.put(mapEntry.getValue(),dicionarioPortuguesEspanhol.get(mapEntry.getKey()));
        }

        return inglesEspanhol;
    }



}

