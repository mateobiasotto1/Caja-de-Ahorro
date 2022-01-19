const ingresos = [new Ingreso("Salario", 23), new Ingreso("Venta", 50)];

const egresos = [new Egreso("Renta", 500)];

function cargarApp() {
  cargarCabecero();
}

function totalIngresos() {
  let totalIngresos = 0;
  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }
  return totalIngresos;
}

function totalEgresos() {
  let totalEgresos;
  for (let egreso of egresos) {
    totalEgresos += egreso.valor;
  }
  return totalEgresos;
}

function cargarCabecero() {
  let totalCuenta = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalEgresos();
  document.getElementById("totalCuenta").innerHTML = totalCuenta;
}
