/* 5.20 Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de Aula, para modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que evidenciar el concepto del polimorfismo. */

class Aula {
  constructor(m2, color) {
    this.m2 = m2;
    this.color = color;
  }
  showInfo() {
    console.log(`m2:${this.m2}, color:${this.color}`);
  }
}

class Musica extends Aula {
  constructor(m2, color, instrumento) {
    super(m2, color);
    this.instrumento = instrumento;
  }
  showInfo() {
    console.log(
      `m2:${this.m2}, color:${this.color}, instrumento:${this.instrumento}`
    );
  }
}

class Tecno extends Aula {
  constructor(m2, herramienta) {
    super(m2);
    this.herramienta = herramienta;
  }
  showInfo() {
    console.log(`m2:${this.m2}, herramienta:${this.herramienta}`);
  }
}

let aulagenerica = new Aula(100, "azul");
let musica1 = new Musica(34, "rojo", "violin");
let tecno1 = new Tecno(56, "martillo");
aulagenerica.showInfo();
musica1.showInfo();
tecno1.showInfo();
