//reto Agrupar numeros por rangos de un array y dar frecuencias de estos rangos.
const arr1 = ()=>{
    let arr= [];
    for(let i=0; i<100; i++){
        arr.push(parseInt(Math.random()*(100-1)+1))
    }
    return arr;
}

function getRangos(maxNumRanges , previoValue  , currentValue ){
    let elemento;
    let minOfRange ;
    let sizeOfRange =0;
    
    for(let i=0; i<=maxNumRanges; i++){
        minOfRange  = sizeOfRange+1;
        sizeOfRange += 10;
        
        if(minOfRange<=currentValue && currentValue <=sizeOfRange){
            elemento = `range_${minOfRange}_${sizeOfRange}`;
            if(!previoValue[elemento] ){
                previoValue[elemento] =1
            }   else{
                previoValue[elemento]++
            }
        }     
    }//for
    return previoValue;
}                

const rangosFrecuencia = (arr)=>{
    console.log("arr : ",arr.sort());
    return arr.reduce(
        (previoValue , currentValue , currentIndex,)=>{
           //>>>>>>>>>>>>>>>>>
           let sizeOfRange = 41
           previoValue = getRangos(10, previoValue , currentValue , sizeOfRange);
           //>>>>>>>>>>>>>>>>>
           return previoValue; 
        },{})
}

const miarr = arr1();
miarr.sort( (a,b)=>{a-b});
console.log("miarr ordenado" , miarr);
console.log("rangosFrecuencia :" ,rangosFrecuencia(miarr));



// const mayorDelArr = (arr)=>{
//     let mayorEs;
//     let pasadas=0;
//     // debugger;
//     for(let i= 0; i<arr.length ; i++){
//              if(arr[i] >arr[i+1]) {mayorEs = arr[i]   }
//         else if(arr[i] <arr[i+1]) {mayorEs = arr[i+1] }
//         else if(arr[i]==arr[i+1]) {mayorEs = arr[i]    }
//         pasadas++;
//     }
//     console.log( {mayorEs, pasadas});
// };

// const miarrOrdenado = miarr.sort((a,b)=>{a-b});
// console.log("miarrOrdenado :" , miarrOrdenado);