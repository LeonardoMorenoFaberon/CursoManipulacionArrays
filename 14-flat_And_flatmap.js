const matriz = [
    [1,2,3],
    [4,5,6 ,[1,2, [1,2,3]]],
    [7,8,9]
]
//..................

// console.log("matriz.flat(2) :",matriz.flat(2));
// console.log("matriz :" , matriz);


function aplanarArray(parametro){
    let arrayPlano = [];
    
    const recursiva=
    (parametro)=>{if(Array.isArray(parametro)){
                        parametro.forEach(elemento=>recursiva(elemento))
                    }else{
                        arrayPlano.push(parametro);
                    }
                    return arrayPlano; 
                }//fin de recursiva
    return recursiva(parametro);
}
console.log("recursiva(matriz) ;" , aplanarArray(matriz));

const devuelto = (recibido)=>{
    let arrayPlano = [];
        arrayFlatter = (parametro)=>{        
            parametro.forEach(elemento=>{
                if(Array.isArray(elemento)){
                    arrayFlatter(elemento);
                }else{
                    arrayPlano.push(elemento);
                }
            })
            return arrayPlano;
        }
        return arrayFlatter(recibido);
}

console.log("arrayFlatter(matriz) :" , devuelto(matriz));