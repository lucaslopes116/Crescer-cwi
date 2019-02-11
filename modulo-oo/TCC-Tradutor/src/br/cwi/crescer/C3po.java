package br.cwi.crescer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class C3po extends Romano {

    private Map<String, String> mapKlingonEmTraducao = new HashMap<>();
    private Map<String, Integer> mapKlingon = new HashMap<>();
    private List<String> primeiraPergunta = new ArrayList<>();
    private int resposaNumero = 0;
    private List<Integer> valores = new ArrayList();

    public Map preparaFraseKlingon(String frase) {
        String[] frasePreparadaKlingon = frase.split("eh");
        mapKlingonEmTraducao.put(frasePreparadaKlingon[0], frasePreparadaKlingon[1]);

        return mapKlingonEmTraducao;
    }

    public Map dicionarioKlingon(Map<String, String> mapa) {

        for (Map.Entry<String, String> mapEntry : mapa.entrySet()) {
            mapKlingon.put(mapEntry.getKey(), mapRomano.get(mapEntry.getValue().trim()));
        }

        return mapKlingon;
    }

    public List<String> recebePergunta(String pergunta) {
        for (String palavra : pergunta.split(" ")
                ) {
            primeiraPergunta.add(palavra);
        }
        for (int i = 0; i < primeiraPergunta.size(); i++) {
            while (primeiraPergunta.contains("quanto") || primeiraPergunta.contains("custa") || primeiraPergunta.contains("?")) {
                primeiraPergunta.remove("quanto");
                primeiraPergunta.remove("custa");
                primeiraPergunta.remove("?");
            }
        }

        for (int i = 0; i < primeiraPergunta.size(); i++) {
            if ((primeiraPergunta.get(i).equals("puchpae"))) {
                valores.add(i, 10);
            } else if (((primeiraPergunta.get(i)).equals("quch"))) {
                valores.add(i, 50);
            } else if (((primeiraPergunta.get(i)).equals("ghobe"))) {
                valores.add(i, 1);
            }
        }
        return primeiraPergunta;
    }


    public String dizAResposta(List primeiraPergunta) {
        StringBuilder resposa = new StringBuilder();
        resposa.append(" ");
        for (Object palavra : primeiraPergunta
                ) {
            resposa.append(palavra);
            resposa.append(" ");
        }
        for (int i = 0; i < primeiraPergunta.size(); i++) {
            if (!mapKlingon.containsKey(primeiraPergunta.get(i))) {
                validaOrdemSoma();
                resposaNumero += valores.get(i);
            }
        }

        resposa.append("eh");
        resposa.append(" " + resposaNumero);

        return resposa.toString().trim();
    }

    private void validaOrdemSoma() {

        for (int i = 0; i < valores.size() - 1; i++) {
            if (valores.get(i) < valores.get(i + 1)) {
                if (valores.get(i) == 10) {
                    valores.set(i, 10 * -1);
                } else if (valores.get(i) == 1) {
                    valores.set(i, -1);
                }
            }
        }
    }
}












