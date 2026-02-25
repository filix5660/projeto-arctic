const musicas = [
    "Do I Wanna Know?",
    "505",
    "R U Mine?",
    "Arabella",
    "oppning night",
    "I wanna be yours",
   
];

const btnSortear = document.getElementById('btn-sortear');
const displayMusica = document.getElementById('display-musica');


btnSortear.addEventListener('click', () => {
    displayMusica.style.opacity = 0;

    setTimeout(() => {
      
        const indiceAleatorio = Math.floor(Math.random() * musicas.length);
        const musicaEscolhida = musicas[indiceAleatorio];

       
        displayMusica.innerText = `${musicaEscolhida}`;
        displayMusica.style.opacity = 1;
        displayMusica.style.transition = "opacity 0.5s";
    }, 200); 
});
