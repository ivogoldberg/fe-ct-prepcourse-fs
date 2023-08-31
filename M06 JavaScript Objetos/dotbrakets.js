//ahora cambiamos la sintaxis, y usamos los corchetes
//creo un objeto con la propiedad


var atuendos = {manos: ['Guantes','Anillos'], pies: ['Zapatillas', 'Zapatos']}

atuendos['Piernas'] = ['Bermudas', 'Shorts'];
console.log(atuendos);

// ejericio mas complicado

var comidas = {};  //objeto vacio
var diferenciaDeNotaciones = function (propUno, propDos) {
comidas[propUno] = ['Hamburguesa', 'Papas'];
comidas[propDos] = ['Lechuga', 'Tomate'];}

 //diferenciaDeNotaciones('no saludable', 'saludable') ;
 
diferenciaDeNotaciones('no saludable', 'saludable');
console.log(comidas);