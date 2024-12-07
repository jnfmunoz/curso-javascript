class Persona{
    
    static _conteo = 0; // propiedades
    static get conteo() { // get 
        return Persona._conteo + ' instances';
    }
    static mensaje(){ // métodos
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }


    // nombre = ''; // opcional
    // codigo = '';
    // frase = '';
    comida = '';

    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estático: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona );