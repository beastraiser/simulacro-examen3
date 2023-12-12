/* Obten la hora actual del día con los métodos date() y getHours(). A continuación da los buendos días, buenas tardes o buenas noches dependiendo de la hora. */
horaActual = new Date().getHours();
console.log(horaActual);

if (horaActual > 6 && horaActual < 12) {
  console.log("Buenos Días");
} else if (horaActual >= 12 && horaActual < 20) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas Noches");
}
