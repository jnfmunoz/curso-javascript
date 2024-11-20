let personaje = {
    nombre : 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre:',  personaje.nombre);
console.log('Nombre:',  personaje['nombre']);
console.log('Edad:',  personaje['edad']);

console.log('Coords:',  personaje.coords);
console.log('Lat:',  personaje.coords.lat);

console.log('N° Trajes:',  personaje.trajes.length);
console.log('Último Traje:',  personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Última Película:', personaje['ultima-pelicula']);
