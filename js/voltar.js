function voltarJogo() {
    const resposta = document.getElementById('inputResposta').value.trim().toLowerCase();

    // Este objeto mapeia a [RESPOSTA] para o [NOME DO ARQUIVO]
    const fases = {
        "sueca": "o-assassino.html",                        //01
        "william_afton": "aquilo-que-se-perdeu.html",       //02
        "elo": "inverta.html",                              //03
        "armenia": "baby.html",                             //04
        "lover": "casa.html",                               //05
        "cidade_maravilhosa": "Ελλάδα.html",                //06
        "metafisica": "KD.html",                            //07
        "musa": "we-are-family.html",                       //08
        "olivia": "bf.html",                                //09
        "urban_muller": "latim.html",                       //10
        "vibrio_cholerae": "WA-DC.html",                    //11
        "marion_barry": "questra.html",                     //12
        "humberto": "αβ.html",                              //13
        "simplicio": "B16.html",                            //14
        "thuleanperspective": "homem-rindo.html",           //15
        "efeso": "fut.html",
        "vfc_30100": "nerdthings.html",
        "amor": "multiplique.html",
        "verde_limao_escuro_moderado": "primeiracarta.html",
        // Adicione as outras fases aqui seguindo o padrão "resposta": "arquivo.html"
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
