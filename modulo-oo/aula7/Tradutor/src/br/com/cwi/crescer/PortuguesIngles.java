package br.com.cwi.crescer;


import java.util.HashMap;
import java.util.Map;

public class PortuguesIngles {

    public String traduzirPortuguesIngles (String frase){

        Map<String, String> dicionarioPortugesIngles = new HashMap<>();
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

        StringBuilder frasePortugesIngles = new StringBuilder();
        for (String palavra :frase.split(" ")
             ) {
                    frasePortugesIngles.append(dicionarioPortugesIngles.get(palavra));
                    frasePortugesIngles.append(" ");
        }

        return frasePortugesIngles.toString().trim();
    }



}
