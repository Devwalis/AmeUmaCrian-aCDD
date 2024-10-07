const imagens = [
    {
        id: '1',
        background: 'good-team-animate.svg',
        front: 'andre.png'
    },
    {
        id: '2',
        background: 'world-childrens-day-animate.svg',
        front: 'micheline.png'
    }
];

let currentIndex = 0;

function criarCarrosel() {
    const container = document.querySelector('.container');
    const frontImage = document.getElementById('frontImage');

    setInterval(() => {
        // Atualiza o índice atual e reinicia se ultrapassar o tamanho do array
        currentIndex = (currentIndex + 1) % imagens.length;

        // Atualiza a imagem de fundo
        container.style.backgroundImage = `url(/img/${imagens[currentIndex].background})`;

        // Atualiza a imagem da frente
        frontImage.src = `/img/${imagens[currentIndex].front}`;
    }, 5000); // 5000 ms = 5 segundos
}

if (imagens[currentIndex].front === 'micheline.png') {
    frontImage.style.width = '200px'; // Novo tamanho para a segunda imagem
} else { 
    frontImage.style.width = '200px'; // Tamanho padrão para outras imagens
}
// Inicia o carrossel quando a página carregar
window.onload = criarCarrosel;


