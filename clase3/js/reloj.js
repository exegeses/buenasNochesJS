// ubicar elemento/s dentro del DOM
    var mostrarReloj = document.getElementById('mostrarReloj');
// generar función/es

    function reloj()
    {

        var fecha = new Date();

        //obtenemos las horas
        var horas = fecha.getHours();
        //obtenemos minutos
        var minutos = fecha.getMinutes();
            if( minutos < 10 ){
                minutos = '0'+ minutos;
            }
        //obtenemos los segundos
        var segundos = fecha.getSeconds();
            if( segundos < 10 ){
                segundos = '0'+ segundos;
            }

        //dia de la semana
        var semana = [
                        'Domingo', 'Lunes', 'Martes', 'Miércoles',
                        'Jueves', 'Viernes', 'Sábado'
                     ];
        var hoy = semana[ fecha.getDay() ];
            console.log( hoy );

        //imprimimos el reloj
        //mostrarReloj.innerHTML = '<img src="images/ninja-coder.png">';
        mostrarReloj.innerText = horas +':'+ minutos +':'+ segundos;
    }

    reloj();
    // actualizar el llamado a una función
    setInterval( reloj, 1000 );