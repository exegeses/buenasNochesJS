//ubicar elementos dentro del DOM
    var txtNombre = document.querySelector('input[name="nombre"]');
    var errorNombre = document.querySelector('#errorNombre');
    var txtEmail = document.querySelector('input[name="email"]');
    var errorEmail = document.querySelector('#errorEmail');
//generar funciones

    function validar() {
        //si el campo Nombre está vacío
        if( txtNombre.value == '' ){
            //mostrar mensaje
            errorNombre.innerHTML = '<img src="imagenes/error.png"> Complete el campo Nombre';
            //evitamos que se envíe el formulario
            return false;
        }
        //si el campo email está vacío
        if( txtEmail.value == '' ){
            //mostrar mensaje
            errorEmail.innerHTML = '<img src="imagenes/error.png"> Complete el campo Email';
            //evitamos que se envíe el formulario
            return false;
        }
        //enviamos el formulario
        return true;
    }