const imagens = [
    { id: '1', background: 'pet-care-animate.svg', front: 'turma.png' },
    { id: '2', background: 'good-team-animate.svg', front: 'andre.svg' },
    { id: '3', background: 'world-childrens-day-animate.svg', front: 'micheline.svg' },
    { id: '4', background: 'muslim-graduation-animate.svg', front: 'caio.svg' },
    { id: '5', background: 'live-collaboration-animate.svg', front: 'vinicius.svg' },
    { id: '6', background: 'in-progress-animate.svg', front: 'milene.svg' },
    { id: '7', background: 'in-progress-animate.svg', front: 'joy.svg' },
    { id: '8', background: 'live-collaboration-animate.svg', front: 'michel.svg' },
    { id: '9', background: 'live-collaboration-animate.svg', front: 'Luiza.png'},
];

let currentIndex = 0;

function criarCarrosel() {
    const container = document.querySelector('.container');
    const frontImage = document.getElementById('frontImage');

    // Define um padrão para largura e altura das imagens
    const larguraPadrao = '250px';
    const alturaPadrao = '350px';

    setInterval(() => {
        // Atualiza o índice atual e reinicia se ultrapassar o tamanho do array
        currentIndex = (currentIndex + 1) % imagens.length;

        // Atualiza a imagem de fundo
        container.style.backgroundImage = `url(img/${imagens[currentIndex].background})`;

        // Atualiza a imagem da frente
        frontImage.src = `img/${imagens[currentIndex].front}`;

        // Define a largura e altura padrão para todas as imagens
        frontImage.style.width = larguraPadrao;
        frontImage.style.height = alturaPadrao;

   

    }, 1000); // Intervalo de 4 segundos
}

// Inicia o carrossel quando a página carregar
window.onload = criarCarrosel;