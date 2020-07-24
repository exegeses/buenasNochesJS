    var dado = document.getElementById('dado');

    function tirarDado()
    {
        //generar numero aleatorio
        var numeroAleatorio = Math.random();
            console.log( numeroAleatorio );
        var numeroMultiplicado = (numeroAleatorio * 5) + 1
            console.log( numeroMultiplicado );
        var numero = Math.round( numeroMultiplicado );
            console.log( numero );
        // mostrar imagen dentro del figure
        dado.innerHTML = '<img src="dados/dado'+numero+'.png">'
    }

    tirarDado();