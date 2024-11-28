let a = 5;

if(a >= 10){ // undefined, null, asignacion
    console.log("A es mayor o igual a 10");
} else{
    console.log("A es menor a 10");
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // {0:Domingo ... 6: Sábado}

console.log({dia});

if (dia === 0){
    console.log("Hoy es Domingo");
} else if (dia === 1){
    console.log("Hoy es Lunes")

    // if (dia === 1){
    //     console.log("Hoy es Domingo");
    // }else{
    //     console.log("No es Lunes ni Domingo");
    // }

} else if(dia === 2){
    console.log("Hoy es Martes");
} else{
    console.log("No es Lunes, Martes o Domingo");
}

dia = 3;

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
};
console.log( diasLetras[dia] || 'Día no definido');


const diasLetras2 = ['Dominego', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log( diasLetras2[dia] || 'Día no definido');