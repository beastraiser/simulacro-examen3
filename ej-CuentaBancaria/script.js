/* Realiza una función prototipo llamada cuenta bancaria que tenga 3 atributos genéricos (nombre, dni, edad) y un atributo importante "saldo". Además tendrá 2 métodos: retirar dinero e ingresar dinero. Probar su funcionamiento con un ingreso y una retirada (pág 12/pdf POO)*/
function CuentaBancaria(nombre, dni, saldo) {
  this.nombre = nombre;
  this.dni = dni;
  this.saldo = saldo;
  this.ingresar = function (q) {
    this.saldo += q;
    console.log(`Saldo actual: ${this.saldo}`);
  };
  this.retirar = function (q) {
    this.saldo -= q;
    console.log(`Saldo actual: ${this.saldo}`);
  };
}

CuentaBancaria.prototype.showInfo = function () {
  console.log(`Saldo inicial: ${this.saldo}`);
};

let alex = new CuentaBancaria("Alex", "x34243243", 1600);
alex.showInfo();
alex.ingresar(500);
alex.retirar(1000);
