/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  
      if (array.length > 0) {
          
          return (array[0]);
      } 
      else {
          
          return null; 
      }
}

   
   
   


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      // Retornar el último elemento del arreglo
      return array[array.length - 1];
  } else {
      // En caso de que el arreglo esté vacío, retornar un valor indicativo o lanzar un error
      return null; // Puedes modificar este valor para que sea adecuado a tu caso
  }
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let newArray = [];

   // Recorrer el arreglo recibido por parámetro
   for (let i = 0; i < array.length; i++) {
       // Incrementar cada elemento en +1 y agregarlo al nuevo arreglo
       newArray.push(array[i] + 1);
   }

   // Retornar el nuevo arreglo con elementos incrementados
   return newArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);

   // Retornar el arreglo con el elemento añadido
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   
   array.unshift(elemento);  // Agrega el elemento al comienzo del arreglo
   return array;  // Retorna el arreglo modificado
   }
   



function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frase = palabras [0];
   for (let i = 1; i < palabras.length; i++){
      frase += " " + palabras[i];
   } return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   } return suma;

} 

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0;i < resultadosTest.length; i++) {
      suma += resultadosTest[i]; 
      
   }
   let promedio = suma / resultadosTest.length;
   return promedio;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let max = arrayOfNums[0];  // Asigna el primer elemento del arreglo como el número más grande

   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > max) {
         max = arrayOfNums[i];  // Si el elemento actual es mayor que el número más grande actual, actualiza "max"
      }
   }

   return max;  // Devuelve el número más grande encontrado
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
      if (arguments.length === 0) {
         return 0;  // Retorna 0 si no se pasan argumentos
      }
      
      let producto = 1;
      
      for (let i = 0; i < arguments.length; i++) {
         producto *= arguments[i];  // Multiplica todos los argumentos
      }
      
      return producto;
   }

   
   
   
   
   
   


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contar = 0;
   for (let i = 0; i < array.length; i++){
      if (array[i] > 18) {
         contar ++;
      }

      

      
   } return contar; 
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let diasLaborales = [2, 3, 4, 5, 6];
   if (numeroDeDia === 1 || numeroDeDia ===7){
      return ("Es fin de semana");
   } else return ("Es dia laboral");
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   
      const numComoString = num.toString();  // Convierte el número a una cadena de texto
      return numComoString.startsWith("9");  // Usa el método startsWith() para verificar si comienza con "9"
   }



function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0) {
      return true;  // Si el arreglo está vacío, se consideran iguales
   }

   const primerElemento = array[0];  // Guarda el primer elemento para comparación

   for (let i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
         return false;  // Si encuentra un elemento diferente al primero, retorna falso
      } else return true
   }

   ;  // Si todos los elementos son iguales, retorna verdadero
}








function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesPedidos = [];
   var mesesEsperados = ["Enero", "Marzo", "Noviembre"];
   
   for (let i = 0; i < array.length; i++) {
      if (mesesEsperados.includes(array[i])) {
         mesesPedidos.push(array[i]);  // Agrega el mes al arreglo de mesesPedidos
      }
   }

   if (mesesPedidos.length === 3) {
      return mesesPedidos;  // Si se encontraron los tres meses, retorna el arreglo
   } else {
      return "No se encontraron los meses pedidos";  // Si no se encontraron los tres meses
   }
}

// Llamada a la función
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
var resultado = mesesDelAño(array);
console.log(resultado);

   


function tablaDelSeis() {
   
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];
   
   for (let i = 0; i <= 10; i++) {
      const resultado = 6 * i;  // Calcula el resultado de la multiplicación
      tabla.push(resultado); } // Agrega el resultado al arreglo
   
   
   return tabla;  // Devuelve el arreglo con los resultados de la tabla
   }

// Llamada a la función y mostrar resultados
const resultadosTabla = tablaDelSeis();
console.log(resultadosTabla);
   


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const resultado = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         resultado.push(array[i]);  // Agrega el valor al arreglo resultado si es mayor a 100
      }
   }

   return resultado;  // Devuelve el arreglo con valores mayores a 100
}
   


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
