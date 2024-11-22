
function saludar( nombre ){
    console.log(arguments);
    console.log('Hola ' + nombre);
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

saludar('Juan', 26, true, 'Chile');
// saludar2('Francisco');

// saludarFlecha();
saludarFlecha2('Melissa');