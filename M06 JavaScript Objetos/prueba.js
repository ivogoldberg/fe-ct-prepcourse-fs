

function nuevoUsuario(nombre, email, password) {
    const usuario = {
       nombre: nombre,
       email: email,
       password: password
    };
    
    return usuario;
 }
 
 // Llamada a la función y acceder a las propiedades del usuario
 const nuevoUsuario = usuario("Juan", "juan@example.com", "clave123");
 console.log(nuevoUsuario.nombre);    // Imprime "Juan"



