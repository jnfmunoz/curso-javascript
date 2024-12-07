class Persona{
    
    static _conteo = 0; // propiedades
    static get conteo() { // get 
        return Persona._conteo + ' instances';
    }
    static mensaje(){ // métodos
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }

    nombre = ''; // opcional
    codigo = '';
    frase = '';
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

class Heroe extends Persona{
    
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'The Avengers';
    }

    quienSoy() { 
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();