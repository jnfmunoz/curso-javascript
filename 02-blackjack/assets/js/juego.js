/** 
     * 2C = Two of Clubs
     * 2D = Two of Diamonds
     * 2H = Two of Hearts
     * 2S = Two of Swords
     */

// Patrón módulo
const miModulo = (() =>{
    'use strict';

    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = [];

    // Referencias html
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = ( numjugadores = 2 ) => { 
        deck = crearDeck();

        puntosJugadores = [];
        for(let i=0; i<numjugadores; i++){
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0);
        divCartasJugador.forEach( elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    // Esta función crea una nueva baraja
    const crearDeck = () => {

        deck = [];
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

        return _.shuffle(deck);
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => {    
        if(deck.length===0){
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // pedirCarta();    

    // Función valor carta
    const valorCarta = (carta) => {
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

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta,turno) => {

            puntosJugadores[turno] += valorCarta(carta);
            puntosHTML[turno].innerText = puntosJugadores[turno];

            return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
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

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length-1);

        }   while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        
        determinarGanador();
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
       
        crearCarta(carta, 0);
        
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

        turnoComputadora(puntosJugadores[0]);

    });

    // btnNuevo.addEventListener('click', () => {        
    //     inicializarJuego();
    // });

    return {
        nuevoJuego : inicializarJuego
    };
})();