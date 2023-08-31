//dentro de una propiedad, podemos guardar una funcion


var misFunciones = {
    saludar: function(){console.log("Hola");},
    edad: 25,
    nombre: "Jose",
};

misFunciones.saludar(); // pongo los corchetes porque dentro de la propiedad saludar, hay una funcion.
console.log(misFunciones.edad); 


