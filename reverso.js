var dibujo = document.getElementById("dibujo");
var lienzo = dibujo.getContext("2d");

function dibujarLinea(color, xini, yini, xfin, yfin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

var pinta = "#FFC300";

min =  1;
max = 29;
//superior-derecho
for(items = min; items < max; items++){
    xi = 10 * (items + 1 );
    yf = 10 * items;
    dibujarLinea(pinta, xi, 0, 300, yf);
    console.log("superior-derecho " + items);
}

//inferior-derecho
for(items = min; items < max; items++){
    yi = 10 * items;
    decre = 290 - yi;
    xf = decre;
    dibujarLinea(pinta, 300, yi, xf, 300);
    console.log("inferior-derecho " + items);
}

//inferior-izquierdo
for(items = min; items < max; items++){
    yi = 10 * items;
    xf = 10 * (items + 1);
    dibujarLinea(pinta, 0, yi, xf, 300);
    console.log("inferior-izquierdo " + items);
}


//superior-izquierdo
for(items = min; items < max; items++){
    xf = 10 * (items + 1);    
    decre = 290 - xf;
    yi = decre;
    dibujarLinea(pinta, 0, yi, xf, 0);
    console.log("superior-izquierdo " + items);
}

