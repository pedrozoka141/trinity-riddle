function voltarJogo() {
    const resposta = document.getElementById('inputResposta').value.trim().toLowerCase();

    // Este objeto mapeia a [RESPOSTA] para o [NOME DO ARQUIVO]
    const fases = {
        "sueca": "o-assassino.html",                        
        "william_afton": "casa.html",
        "cidade_maravilhosa": "aquilo-que-se-perdeu.html",
        "elo": "WA-DC.html",
        "marion_barry": "filme.html",
        "jesus_cristo_e_o_senhor": "diario.html",
        "darren_walsh": "baby.html",
        "lover": "inverta.html",
        "armenia": "espaço.html",
        "snake": "Ελλάδα.html",
        "metafisica": "frequencia.html",
        "lawliet": "primeiracarta.html",
        "ebeorietemethhpiti": "latim.html",
        "vibrio_cholerae": "homem-rindo.html",
        "efeso": "nerdthings.html",
        "avila": "KD.html",
        "musa": "xenofonte.html",
        "poleus": "αβ.html",
        "simplicio": "multiplique.html",
        "verde_limao_escuro_moderado": "we-are-family.html",
        "olivia": "B16.html",
        "thuleanperspective": "coordenadas.html",
        "bombe": "bf.html",
        "persevere": "fut.html",
        "vfc_30100": "questra.html",
        "humberto": "capital.html",
        "santiago": "codigosdepontos.html",
        "verdade_absoluta": "tudoemingles.html",
        "wake_up": "fase30.html",
    };

    if (resposta === "") {
        alert("Por favor, digite uma resposta!");
        return;
    }

    // Verifica se a resposta existe no nosso mapa
    if (fases[resposta]) {
        window.location.href = fases[resposta];
    } else {
        // Se a resposta não estiver na lista, tenta carregar como nome de arquivo (opcional)
        // Ou apenas avisa que está errado:
        alert("Resposta incorreta ou fase não encontrada!");
    }
}

document.getElementById('inputResposta').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        voltarJogo();
    }
});
