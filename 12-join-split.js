const elements = ['Fire', 'Air', 'Water'];
let rtaFinal =  ""
const separator="--"
for(let i=0; i<elements.length; i++){
    const element=elements[i];
    rtaFinal = rtaFinal+ element+separator;
}
console.log("for " , rtaFinal);



console.log(
    'elements.join("--")' , 
    elements.join("--")
);

//CAMBIEMOSLE LE DE FORMA AL STRING PARA USARLO EN UNA URL:
//primero lo separamos en array.
const title =  "Curso de Manipulacion de Arrays";
const arrTitleFinal =  title.split(' ');

console.log(
    'separado',
    arrTitleFinal
);

//luego lo juntamos con el under score :
const urlTitle = arrTitleFinal.join('_');
console.log("urlTile :", urlTitle);
            //Curso_de_Manipulacion_de_Arrays
            
//ahora todo  en una linea y poniendo todas las letras a miniscula:
console.log(
    "title.split(' ').join('_').toLowerCase() :",
title.split(' ').join('_').toLowerCase()
);
            //curso_de_manipulacion_de_arrays

