const total = [1,2,3,4,5];

let  sum = 0; 
for(let index =0; index < total.length; index++){
    const element = total[index]
    console.log(element);
    sum += element;
}

console.log(sum);

const sumando =  total.reduce((sum , element, currentIndex)=>{sum+= element
return sum})
console.log("sumando " ,sumando)

console.log( "ultima : " +
    total.reduce((previoValue , currentValue , index)=>{return previoValue+= currentValue;
        })
);

const total = [1,2,3,4,5];

let acumuladorIniciaEn = 3;
let  flecha = (acumulador , item , index)=>{return acumulador += item }
console.log(
    "explicito :" +
    
    total.reduce( flecha, acumuladorIniciaEn) //daria 18  ya q inicia en 3 
)

