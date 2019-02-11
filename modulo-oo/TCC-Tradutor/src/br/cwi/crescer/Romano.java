package br.cwi.crescer;

import java.util.HashMap;
import java.util.Map;

public class Romano {

    protected Map<String, Integer> mapRomano;

    public Map romano() {

        mapRomano = new HashMap<>();

        mapRomano.put("I", 1);
        mapRomano.put("V", 5);
        mapRomano.put("X", 10);
        mapRomano.put("L", 50);
        mapRomano.put("C", 100);
        mapRomano.put("D", 500);
        mapRomano.put("M", 1000);

        return mapRomano;
    }
}
