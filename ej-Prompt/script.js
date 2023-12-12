/* Pide al usuario varios datos por pantalla (Nombre, Grado y Edad), muestra por pantalla o en la consola los datos. Si el usuario no rellena los campos, deberá de haber un valor predeterminado. Ten en cuenta todos los posibles errores.*/
let nombre = prompt("Nombre: ", "Alexandru");
while (true) {
  if (!isNaN(nombre)) {
    nombre = prompt("Intentalo de nuevo ...\nNombre: ", "Alexandru");
  } else {
    break;
  }
}

let grado = prompt("Grado: ", "DAW").toUpperCase();
while (true) {
  if (!isNaN(grado)) {
    grado = prompt("Intentalo de nuevo ...\nGrado: ", "DAW").toUpperCase();
  } else {
    break;
  }
}

let edad = parseInt(prompt("Edad: ", 27));
while (true) {
  if (isNaN(edad) || edad < 0) {
    edad = parseInt(prompt("Intentalo de nuevo ...\nEdad: ", 27));
  } else {
    break;
  }
}

alert(`${nombre}, ${grado}, ${edad}`);
