function verificar() {
    var input = document.getElementById("respostaUsuario").value.toLowerCase().trim();
    var botao = document.getElementById("btn-verificar");
    
    var respostaCorreta = botao.getAttribute("data-answer");
    var proximaFase = botao.getAttribute("data-next"); // Pega o link do HTML

    if (input === respostaCorreta) {
        alert("Correto! Prossiga.");
        window.location.href = proximaFase; // Redireciona para o valor do data-next
    } else {
        alert("Errado... tente novamente.");
    }
}

document.getElementById('respostaUsuario').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verificar();
    }
});
