const imagens = [
    { img1: 'img/resultado1.png', img2: 'img/resultado2.png' },
    { img1: 'img/resultado3.png', img2: 'img/resultado4.png' },
    { img1: 'img/resultado5.png', img2: 'img/resultado6.png' }
];

let currentIndex = 0;

function atualizarImagens() {
    // Atualiza os src das duas imagens visíveis
    document.getElementById('img1').src = imagens[currentIndex].img1;
    document.getElementById('img2').src = imagens[currentIndex].img2;
}

function proximo() {
    currentIndex = (currentIndex + 1) % imagens.length; // Avança para a próxima
    atualizarImagens();
}

function voltar() {
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length; // Volta para a anterior
    atualizarImagens();
}

// Inicializa o carrossel com as primeiras imagens
window.onload = atualizarImagens;