const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = elements.map(element=>element);

for(let index =0; index<otherElements.length ; index++){
    const element =otherElements[index];
    newArray.push(element);
}
console.log('for' , newArray);


const rta =  elements.concat(otherElements);
console.log("elements.concat(otherElements) me da : " , elements.concat(otherElements));

// tambien puedes hacerlo con el split operation:
const miArray = [...elements]  ; // esto es para copiar el array
console.log("miArray " ,miArray);
const rta2 =  [...elements , ...otherElements];
console.log("rta2 " , rta2);

const copiaDeElements  = [...elements]; //otra forma de copiar arrays uno elmeento a elemento.
copiaDeElements.push(...otherElements);

console.log(
    "que pasa si le meto todo el otroArray :" , 
    elements,
    copiaDeElements
);



