// getElementById()
    var elSpan = document.getElementById('elSpan');
        elSpan.innerText = 'texto generado por javascript';

//getElementsByTagName()
    var links = document.getElementsByTagName('a');
        console.log(links);
        links[2].style.color = '#92773d';
        links[2].style.borderBottom = '2px solid #92773d';

// getElementsByClassName()
    var productos = document.getElementsByClassName('producto');
        console.log(productos);
    //for ( inicio; condicion; incremento ){
    var cantidad = productos.length;
    for ( n = 0; n < cantidad; n++ ){
        productos[n].style.border = '1px solid #92773d';
    }