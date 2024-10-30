function turnOn() {
    fetch('https://projeto-airlink-api.onrender.com/ac/on', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                document.getElementById('status').innerText = 'Status: Ligado';
            }
        })
        .catch(error => console.error('Erro ao ligar o ar-condicionado:', error));
}

function turnOff() {
    fetch('https://projeto-airlink-api.onrender.com/ac/off', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                document.getElementById('status').innerText = 'Status: Desligado';
            }
        })
        .catch(error => console.error('Erro ao desligar o ar-condicionado:', error));
}

function checkStatus() {
    fetch('https://projeto-airlink-api.onrender.com/ac/state')
        .then(response => response.json())
        .then(data => {
            const statusText = data.state ? 'Status: Ligado' : 'Status: Desligado';
            document.getElementById('status').innerText = statusText; // Atualiza o status no frontend
        })
        .catch(error => console.error('Erro ao verificar status do ar-condicionado:', error));
}

// Funções para os botões adicionais (sem funcionalidade por enquanto)
function increaseTemperature() {
    console.log("Aumentar temperatura");
}

function decreaseTemperature() {
    console.log("Diminuir temperatura");
}

function setFan() {
    console.log("Ativar ventilador");
}

function setDirection() {
    console.log("Definir direção");
}

function setSleep() {
    console.log("Modo sleep ativado");
}

function setEco() {
    console.log("Modo eco ativado");
}
