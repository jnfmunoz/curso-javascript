class Persona{    
    nombre ='';
    codigo ='';
    frase ='';

    constructor(nombre='Sin nombre', codigo='Sin código', frase='Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();