/*  arrays en javascript */
    var nombres = [
                    'marcos', 'mateo', 'juan',
                    'pedro', 'santiago', 'benjamin'
                    ];
    console.log( nombres );

// ubicar txtFecha dentro del DOM
    var txtFecha = document.getElementById('txtFecha');

    function verFecha()
    {
        var fecha = new Date();

        //día de la semana
        var diaSemana = fecha.getDay();
        var semana =  [
                        'Domingo', 'Lunes', 'Martes',
                        'Miércoles', 'Jueves', 'Viernes',
                        'Sábado'
                       ];
        // día del mes
        diaMes = fecha.getDate();
        // mes actual
        var mes = fecha.getMonth();
        var meses =  [
                        'enero', 'febrero', 'marzo', 'abril',
                        'mayo', 'junio', 'julio', 'agosto',
                        'septiembre', 'octubre', 'noviembre', 'diciembre'
                     ];
        // año actual
        var anio = fecha.getFullYear();

        //imprimimos datos en txtFecha
        txtFecha.innerText = semana[diaSemana] +' '+ diaMes +' de '+ meses[mes] +' de '+ anio;

    }

    verFecha();
