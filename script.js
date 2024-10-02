function lancarDados() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function jogarCraps() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Bem-vindo ao jogo de Craps! Clique em 'Iniciar Jogo'.";

    // Primeira jogada
    let primeiroLance = lancarDados();
    resultadoDiv.innerHTML += `<br><strong>Você tirou ${primeiroLance} no primeiro lance.</strong>`;

    if (primeiroLance === 7 || primeiroLance === 11) {
        resultadoDiv.innerHTML += "<br><span style='color: green;'>Você fez um 'natural'! Você ganhou!</span>";
    } else if (primeiroLance === 2 || primeiroLance === 3 || primeiroLance === 12) {
        resultadoDiv.innerHTML += "<br><span style='color: red;'>Craps! Você perdeu.</span>";
    } else {
        let ponto = primeiroLance;
        resultadoDiv.innerHTML += `<br>Seu ponto é ${ponto}. Continue jogando até tirar ${ponto} novamente ou um 7.`;
        
        let continuarJogando = true;

        while (continuarJogando) {
            let novoLance = lancarDados();
            resultadoDiv.innerHTML += `<br>Você tirou ${novoLance}.`;

            if (novoLance === ponto) {
                resultadoDiv.innerHTML += "<br><span style='color: green;'>Você tirou o seu ponto! Você ganhou!</span>";
                continuarJogando = false;
            } else if (novoLance === 7) {
                resultadoDiv.innerHTML += "<br><span style='color: red;'>Você tirou um 7! Você perdeu.</span>";
                continuarJogando = false;
            }
        }
    }
    document.getElementById('reiniciar').classList.remove('escondido');
}

function reiniciarJogo() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').classList.add('escondido');
    document.getElementById('iniciar').classList.remove('escondido');
}

document.getElementById('iniciar').addEventListener('click', function() {
    jogarCraps();
    this.classList.add('escondido');
});

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);