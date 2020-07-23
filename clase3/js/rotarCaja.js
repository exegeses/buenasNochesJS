
    var caja = document.getElementById('caja');
        //desplazamiento
        caja.style.position = 'relative';
        caja.style.top = '100px';
        caja.style.left = '100px';
    var grados = 0;

    function rotar()
    {
        var red = Math.random() * 255; // entre 0 y 1
            console.log( red );
        var green = Math.random() * 255;
        var blue = Math.random() * 255;
        caja.style.backgroundColor = 'rgb( '+red+', '+green+', '+blue+' )';
        grados += 3; // grados = grados + 3
        caja.style.transform = 'rotate('+grados+'deg)';
    }

    rotar();
    setInterval( rotar, 100 );