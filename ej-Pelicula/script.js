/* 5.24 Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno, duración, género, los seis actores o actrices más importantes, la URL de su cartel promocional y su director; y una acción que permita mostrar en consola toda la información. El constructor recibirá los datos en una cadena JSON de la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba. */

jsonString = new String(
  `{"nombre": "Conan", "actores": ["A", "B", "C"], "anyo": "1999"}`
);

class Pelicula {
  constructor(jsonString) {
    this.jsonString = JSON.parse(jsonString);
    this.nombre = this.jsonString.nombre;
    this.actores = this.jsonString.actores;
    this.anyo = this.jsonString.anyo;
  }
  showInfo() {
    console.log(
      `nombre: ${this.nombre}, actores: ${this.actores}, año: ${this.anyo}`
    );
  }
}

let conan = new Pelicula(jsonString);
conan.showInfo();
