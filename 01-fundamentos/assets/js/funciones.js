
function saludar( nombre ){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2,3,4,5];  

    // Esto nunca se va a ejecutar
    console.log('Este código está después del return');
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Mundo');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Juan', 26, true, 'Chile'); // 10
console.log(retornoDeSaludar[0],retornoDeSaludar[1]);
// saludar2('Francisco');

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a,b){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// };

const sumar2 = (a,b) => a + b;

console.log(sumar(1, 2));
console.log(sumar2(3, 4));

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());

