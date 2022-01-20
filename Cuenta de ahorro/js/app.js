const ingresos = [

];

const egresos = [

];

function cargarApp() {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
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

function formato(valor){
  return valor.toLocaleString('es-AR',{style:'currency', currency:'ARS', minimumFractionDigits:2});
}

function formatoPorcentaje(valor){
  return valor.toLocaleString('es-AR',{style:'percent', minimumFractionDigits:2});
}
function cargarCabecero() {
  let totalCuenta = totalIngresos() - totalEgresos();
  let porcentajeEgresos = totalEgresos()/totalIngresos();
  document.getElementById("presupuesto").innerHTML = formato(totalCuenta);
  document.getElementById("ingresos").innerHTML = formato(totalIngresos());
  document.getElementById("egresos").innerHTML = formato(totalEgresos());
  if(isNaN(porcentajeEgresos)){
    porcentajeEgresos = formatoPorcentaje(0)
  }
  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgresos);
}

function crearIngresoHTML(ingreso){
  let ingresoHTML = 
  `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formato(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-outline"
          onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>`;
  return ingresoHTML;
}

function cargarIngresos(){
  let ingresosHTML = '';
  for(let ingreso of ingresos){
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

function crearEgresoHTML(egreso){
  let egresoHTML= 
  `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formato(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-outline"
          onclick="eliminarEgreso(${egreso.id})""></ion-icon>
        </button>
      </div>
    </div>
  </div>`
  return egresoHTML;
}
function cargarEgresos(){
  let egresosHTML = '';
  for(let egreso of egresos){
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
}
function eliminarIngreso(id){
  let indice = ingresos.findIndex(ingreso => ingreso.id === id);
  ingresos.splice(indice,1);
  cargarCabecero();
  cargarIngresos();
}
function eliminarEgreso(id){
  let indice = egresos.findIndex(egreso => egreso.id === id);
  egresos.splice(indice,1);
  cargarCabecero();
  cargarEgresos();
}

function agregarDato(){
  let form = document.forms['formulario'];
  let tipo = form['tipo'];
  let descripcion  = form['descripcion'];
  let valor = form['valor'];
  if(descripcion.value !=='' && valor.value !== ''){
    if(tipo.value === 'ingreso'){
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    }
    else if(tipo.value ==='egreso'){
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
}