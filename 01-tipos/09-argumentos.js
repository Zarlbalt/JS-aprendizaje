function suma(a, b) { //cuando referenciamos los valores dentro de las funciones se llaman parametros
    console.log(arguments)
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); //cuando le damos los valores cuando llamamos a la funcion se llaman argumentos.
console.log(resultado)
console.log(typeof suma);