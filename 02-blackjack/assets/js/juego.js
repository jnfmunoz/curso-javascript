/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Swords
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Esta función crea una nueva baraja
const crearDeck = () => {

    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let esp of especiales){
        for(let tipo of tipos){
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {    
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();

    // console.log(deck);
    // console.log(carta);
    return carta;
}

// pedirCarta();    

// Función valor carta
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1
    // let puntos = 0;
    // console.log({valor});

    // if(isNaN(valor)){       
    //     console.log('Es un caracter');
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     console.log('Es un número');
    //     puntos = valor*1; // multiplicamos *1 para pasar de string a número el valor de la variable
    // }
    // console.log(puntos);
}

// const valor = valorCarta(pedirCarta());
// console.log({valor})

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/10C.png" alt="">            
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    }   while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ){
            alert('Nadie gana =(');
        } else if( puntosMinimos > 21 ){ 
            alert( 'Computadora gana!' );
        } else if( puntosComputadora > 21 ){
            alert('Jugador Gana');
        } else{
            alert('Computadora Gana');
        };
    }, 95);
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/10C.png" alt="">            
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    
    if(puntosJugador>21){
        console.log('Perdiste!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador===21){
        console.warn('Ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});
