// ubicar elemento/s dentro del DOM
    var caja = document.getElementById('caja');

// generar función/es
    function ocultar()
    {
        // visibility: hidden|visible
        // display:  none|block
        // opacity:  0|1
        caja.style.display = 'none';
    }
    function mostrar()
    {
        caja.style.display = 'block';
    }
    function mostrarOcultar()
    {
        if ( caja.style.display == 'none'  ){
            mostrar();
        }
        else{
            ocultar();
        }
    }