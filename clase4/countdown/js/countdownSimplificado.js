//ubicar elementos dentro del DOM
    var txtDias  = document.getElementById('dias');
    var txtHoras  = document.getElementById('horas');
    var txtMinutos  = document.getElementById('minutos');
    var txtSegundos  = document.getElementById('segundos');

// generar función de cuenta regresiva

    function countdown()
    {
        var fechaAhora = new Date();
        var fechaEvento = new Date(2020, 7, 2);

        var ahora = fechaAhora.getTime(); // fecha actual en milisegundos
        var evento = fechaEvento.getTime(); // fecha de evento en milisegundos

        var restante = evento - ahora; // tiempo restante

        // separado en dias, horas minutos y segundos
        var segundos = Math.floor( restante/1000 ); //console.log(segundos)
        var minutos = Math.floor( segundos/60 ); //console.log(minutos)
        var horas = Math.floor( minutos/60 ); //console.log(horas)
        var dias = Math.floor( horas/24 );  //console.log(dias)

        // módulo de horas por día
        horas = horas % 24;
        //módulo de minutos por hora
        minutos = minutos % 60;
        // módulo de segundos por minutos
        segundos = segundos % 60;

        // ceros iniciales
        if( horas < 10 ){
            horas = '0'+ horas;
        }
        if( minutos < 10 ){
            minutos = '0'+ minutos;
        }
        if ( segundos <10 ){
            segundos = '0'+ segundos;
        }

        //imprimimos
        txtDias.innerText = dias;
        txtHoras.innerText = horas;
        txtMinutos.innerText = minutos;
        txtSegundos.innerText = segundos;

    }

// invocamos a la función
    countdown();

// que actualice, papuuu
    setInterval( countdown, 1000 )