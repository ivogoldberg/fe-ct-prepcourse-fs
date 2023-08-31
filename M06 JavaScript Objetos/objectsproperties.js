
var libro = {autor: "Borges", genero:"Policial", año:1990};
var tienePropiedad = libro.hasOwnProperty("false");
console.log(tienePropiedad);  // me da un booleano, falso en este caso, ya que no esta la propiedad nombre.


var todasLasPropiedas = Object.keys(libro);
console.log(todasLasPropiedas); // nps devuelve un arreglo con todas las propiedades de mi objeto Libro.

// los objetos tambien se pueden recorrer con un bucle for in.

var mundo = {continente: 7, paises: 56, oceanos: 5 };
for(var prop in mundo){
    console.log("Esta es una propiedad :" + prop)
    console.log("Este es el valor :" + mundo[prop])
}



