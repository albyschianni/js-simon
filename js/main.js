// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const myContainer = document.getElementById("container");


for (let i = 1; i <=5; i++){

    let randomNum = genArrNumUniciRandomMinMax(1, 100);
    console.log(randomNum);

    let nuovoElemento = createBox ("div", "box");
         nuovoElemento.append(randomNum);

    myContainer.appendChild(nuovoElemento);
}

let tabella = document.querySelector(".tabella");

let timer = 5;

let clock = setInterval(function() {
    timer--;
    console.log(timer);

    if (timer === 0){
        clearInterval(clock);
        tabella.classList.add("display");
        setTimeout(raccoltaNum, 500);

    }
    
}, 1000);



    
    

    
// FUNCTION

function createBox(tipoElemento, classe){

    const mioElement = document.createElement(tipoElemento);
    mioElement.classList.add(classe);
    

    return mioElement;
}


function randomInteger(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

function genArrNumUniciRandomMinMax(minNum, maxNum) {

    const randomArr = [];

    let newNumber = randomInteger(minNum, maxNum);
    randomArr.push(newNumber);
    return randomArr;
}


function raccoltaNum(){
    let numeriScelti = prompt("Inserisci i numeri separati dalla virgola");
    const arrSelezionati = [];
    arrSelezionati.push(numeriScelti.split(","));
    console.log(arrSelezionati);
}