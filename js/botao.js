// Lógica do Botão Secreto (Aparece ao passar o mouse)
var area = document.getElementById("areaSecreta");
var botaoSecreto = document.getElementById("botaoSecreto");

// Verificamos se a área existe nesta fase específica para não dar erro no console
if (area && botaoSecreto) {
    area.addEventListener("mouseover", () => {
        botaoSecreto.style.opacity = 1;
    });

    area.addEventListener("mouseout", () => {
        botaoSecreto.style.opacity = 0;
    });
}