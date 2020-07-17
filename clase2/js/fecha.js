// ubicamos elemento/s dentro del DOM

    var cajaTexto = document.getElementById('cajaTexto');

// creamos un objeto de fecha
    var fecha = new Date();
    // número del día del mes
    var diaMes = fecha.getDate();
    // número del mes
    var mes = fecha.getMonth()+1;
    // año actual
    var anio = fecha.getFullYear();

// imprimimos en #cajaTexto
    cajaTexto.innerText = diaMes + '/' + mes + '/' + anio;