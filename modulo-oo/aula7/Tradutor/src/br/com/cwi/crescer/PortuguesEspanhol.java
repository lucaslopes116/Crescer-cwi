package br.com.cwi.crescer;

import java.util.HashMap;
import java.util.Map;

public class PortuguesEspanhol  {

    public String traduzirPortuguesEspanhol (String frase){

        Map<String, String> dicionarioPortuguesEspanhol = new HashMap<>();
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

        StringBuilder frasePortugesEspanhol = new StringBuilder();
        for (String palavra:frase.split(" ")
        ) {
            frasePortugesEspanhol.append(dicionarioPortuguesEspanhol.get(palavra));
            frasePortugesEspanhol.append(" ");
        }

        return frasePortugesEspanhol.toString().trim();
    }
}
