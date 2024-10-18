const Carrosel = {
    imagens: [
        { id: '1', background: 'pet-care-animate.svg', front: 'turma.png' },
        { id: '2', background: 'good-team-animate.svg', front: 'andre.svg' },
        { id: '3', background: 'world-childrens-day-animate.svg', front: 'micheline.svg' },
        { id: '4', background: 'muslim-graduation-animate.svg', front: 'caio.svg' },
        { id: '5', background: 'live-collaboration-animate.svg', front: 'vinicius.svg' },
        { id: '6', background: 'in-progress-animate.svg', front: 'milene.svg' },
        { id: '7', background: 'in-progress-animate.svg', front: 'joy.svg' },
        { id: '8', background: 'live-collaboration-animate.svg', front: 'michel.svg' },
        { id: '9', background: 'live-collaboration-animate.svg', front: 'Luiza 1.svg' },
    ],
    currentIndex: 0,

    criar: function() {
        const container = document.querySelector('.container');
        const frontImage = document.getElementById('frontImage');
        const larguraPadrao = '250px';
        const alturaPadrao = '350px';

        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.imagens.length;
            container.style.backgroundImage = `url(img/${this.imagens[this.currentIndex].background})`;
            frontImage.src = `img/${this.imagens[this.currentIndex].front}`;
            frontImage.style.width = larguraPadrao;
            frontImage.style.height = alturaPadrao;
        }, 1000); // Intervalo de 1 segundo
    }
};

const imagens1 = [
    { img1: 'img/img1°.png', img2:'img/img2°.jpg' },
    { img1: 'img/img3.jpg', img2:'img/img4°.jpg'},
    { img1: 'img/img5°.jpg', img2:'img/img6.png'},
    { img1: 'img/img7.jpg', img2:'img/img8.jpg'},
    { img1: 'img/img9.jpg', img2:'img/img10.jpg'},
    { img1: 'img/img11.jpg', img2:'img/img12.jpg'},
    { img1: 'img/img13.jpg', img2:'img/img14.jpg'},
    { img1: 'img/img15.jpg', img2:'img/img16.jpg'},
];

let currentIndexResultados = 0;

function atualizarImagens() {
    console.log("Função atualizarImagens chamada");
    document.getElementById('img1').src = imagens1[currentIndexResultados].img1;
    document.getElementById('img2').src = imagens1[currentIndexResultados].img2;
}

function proximo() {
    currentIndexResultados = (currentIndexResultados + 1) % imagens1.length;
    atualizarImagens();
}

// Combine as funções onload
window.onload = function() {
    Carrosel.criar(); // Inicia o carrossel
    atualizarImagens(); // Exibe as primeiras imagens ao carregar a página
    setInterval(proximo, 1000); // Muda as imagens a cada 1 segundo
};