function doWhile(num) {
    let contador = 0; 
    do {
        num += 5; 
        contador++;   
    } while (contador < 8); 
    
    return num; 
 }

console.log(doWhile(1));