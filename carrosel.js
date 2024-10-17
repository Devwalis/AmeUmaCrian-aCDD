const imagens = [
    {
        id: '1',
        background: 'pet-care-animate.svg',
        front: 'turma.png'
    },

    {
        id: '2',
        background: 'good-team-animate.svg',
        front: 'andre.png'
    },
    {
        id: '3',
        background: 'world-childrens-day-animate.svg',
        front: 'micheline.png'
    },
    {
       id: '4',
        background: 'muslim-graduation-animate.svg',
        front: 'caio (2).png'
    },
    {
        id:'5',
        background: 'live-collaboration-animate.svg',
        front:'Vinicius.png'

    },
    {
        id:'6',
        background: 'design-tools-animate.svg',
        front:'Gaby.png'
    },
    {
        id:'4',
        background: 'in-progress-animate.svg',
        front: 'Luiza.png'
    },
    {
        id:'7',
        background:'in-progress-animate.svg',
        front:'milene (2).png'
    },
    {
        id: '8',
        background: 'in-progress-animate.svg',
        front:'joy.png'
    },
    {
        id:'9',
        background:'live-collaboration-animate.svg',
        front:'michel.png'
    },
    


];

let currentIndex = 0;

function criarCarrosel() {
    const container = document.querySelector('.container');
    const frontImage = document.getElementById('frontImage');

    setInterval(() => {
        // Atualiza o índice atual e reinicia se ultrapassar o tamanho do array
        currentIndex = (currentIndex + 1) % imagens.length;

        // Atualiza a imagem de fundo
        container.style.backgroundImage = `url(img/${imagens[currentIndex].background})`;

        // Atualiza a imagem da frente
        frontImage.src = `img/${imagens[currentIndex].front}`;
    }, 4000); // 4000 ms = 4 segundos
}

if (imagens[currentIndex].front === 'micheline.png') {
    frontImage.style.width = '200px'; // Novo tamanho para a segunda imagem
} else { 
    frontImage.style.width = '200px'; // Tamanho padrão para outras imagens
}


// Inicia o carrossel quando a página carregar
window.onload = criarCarrosel;

