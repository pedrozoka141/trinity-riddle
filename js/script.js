async function verificar() {
    const input = document.getElementById("respostaUsuario").value.toLowerCase().trim();
    const botao = document.getElementById("btn-verificar");
    
    const hashCorreto = botao.getAttribute("data-answer");
    const proximaFaseB64 = botao.getAttribute("data-next");

    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const tentativa = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (tentativa === hashCorreto) {
        alert("Correto! Prossiga.");
        window.location.href = atob(proximaFaseB64);
    } else {
        alert("Errado... tente novamente.");
        inputField.value = "";
        inputField.focus();
    }
}

document.getElementById('respostaUsuario')?.addEventListener('keypress', (e) => {
if (e.key === 'Enter') verificar();
});
