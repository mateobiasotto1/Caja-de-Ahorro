function mostrarReloj(){
    let fecha = new Date();
    
    let hora = formatoHora(fecha.getHours());
    let minuto = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Sep','Oct','Nov','Dic']
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

    let diaSem = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    document.getElementById("hora").innerHTML = `${hora}:${minuto}:${seg}`
    document.getElementById("fecha").innerHTML = `${diaSem}, ${dia} ${mes}`
}
function formatoHora(hora){
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora
}
setInterval(mostrarReloj,1000);