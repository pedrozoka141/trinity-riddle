var area = document.getElementById("areaSecreta");
var botaoSecreto = document.getElementById("botaoSecreto");

// verificar se a area existe nessa fase específica pra não dar erro no console
if (area && botaoSecreto) {
    area.addEventListener("mouseover", () => {
        botaoSecreto.style.opacity = 1;
    });

    area.addEventListener("mouseout", () => {
        botaoSecreto.style.opacity = 0;
    });
}
