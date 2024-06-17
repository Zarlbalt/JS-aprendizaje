//personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",  //par llave - valor
    anime: "demon slayer", //tambien conocido como propiedades
    edad: 16,
};
//se acaba de hacer un objeto literar con el sintaxys {}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
personaje['edad'] = 16;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);