const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('./assets/musica/dragonBallGT.mp3');

// Si acepta: 
btnSi.addEventListener('click', ()=>{
    randomPic.src = './assets/fotos/8.jpg';
    question.innerText = ' Siempre Juntos Amorcito -------- Shairf & Maricielo !!!!! <3 ';
    question.classList.add('question-style');


    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musica.play();


})


// Lógica: 

let contador = 0;

btnNo.addEventListener('click', () => {
    if (contador > 4) {
        btnNo.innerText = 'Ok... ya entendí 😔';
        return;
    }
    switch (contador) {
        case 0:
            btnNo.innerText = 'Segura?';
            btnSi.classList.add('estilo-1');
            randomPic.src = './assets/fotos/2.jpg';
            break;
        case 1:
            btnNo.innerText = 'Segurísima?';
            btnSi.classList.add('estilo-2');
            randomPic.src = './assets/fotos/3.jpg';
            break;
        case 2:
            btnNo.innerText = 'Piensalo :( ?';
            btnSi.classList.add('estilo-3');
            randomPic.src = './assets/fotos/4.jpg';
            break;
        case 3:
            btnNo.innerText = 'No te voy a rogar...';
            btnSi.classList.add('estilo-4');
            randomPic.src = './assets/fotos/5.jpg';
            break;
        case 4:
            btnNo.innerText = 'Ojala te muerda la Emma... ';
            btnSi.classList.add('estilo-5');
            randomPic.src = './assets/fotos/7.jpg';
            break;
    }
    contador++;
});




