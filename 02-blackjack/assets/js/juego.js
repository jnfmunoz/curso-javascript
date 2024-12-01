/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Swords
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
especiales = ['A', 'J', 'Q', 'K'];


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
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
    const carta = deck.pop();

    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }

    console.log(deck);
    console.log(carta);
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

const valor = valorCarta(pedirCarta());
console.log({valor})