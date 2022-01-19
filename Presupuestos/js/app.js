const ingresos = [
  new Ingreso("Salario", 400),
  new Ingreso("Venta", 150)
];

const egresos = [
  new Egreso("Renta", 10),
  new Egreso("Comida", 20)
];

function cargarApp() {
  cargarCabecero();
}

function totalIngresos() {
  let totalIngreso = 0;
  for(let ingreso of ingresos){
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
}

function totalEgresos() {
  let totalEgreso = 0;
  for(let egreso of egresos){
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
}

function cargarCabecero() {
  let totalCuenta = totalIngresos() - totalEgresos();
  document.getElementById("presupuesto").innerHTML = '$' + totalCuenta;
}
