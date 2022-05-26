// const totals = [1,2,3,4,5];
const totals = [1 , 2 , 3 , 3];
const flechaFuncion = (acumulado , currentElement , currentIndex)=>{
        if(!acumulado[currentElement]){
            acumulado[currentElement]=1;
        }else{
            acumulado[currentElement]++
        }   
        return acumulado;  
    }

const resultado = totals.reduce( 
    flechaFuncion,
    {}
)

console.log(resultado);


    //{ '1': 1, '2': 1, '3': 2 }



    const data = [
        {
            name:"Nicolas",
            level: "alto"
            },      
        {
            name:"Sulema",
            level: "medio"
            },
        {
            name:"Higinio",
            level: "bajo"
            },
        {
            name:"Belizario",
            level: "medio"
            },        
]


const niveles =  data.map((elemento , index , arr)=>{
    return elemento.level
})
//[ 'alto', 'medio', 'bajo', 'medio' ]

console.log(niveles)

const frecuencyLevels = niveles.reduce(
    (acumulado , currentElement , currentIndex)=>{
        if(!acumulado[currentElement]){
            acumulado[currentElement]=1
        }else{
            acumulado[currentElement]++
        }
        return acumulado;
    },
    {});

    console.log(frecuencyLevels);  
    //{ alto: 1, medio: 2, bajo: 1 }


    //Pero entonces se puede hacer de una sola cuando ya sabemos que va a devolver el map y luego que le pedimos al
    //reduce:
    const frecuenciaCorta = data
    .map((elemento, index)=>{
        return elemento.level
        })
    .reduce((acumulado , currentElement, indexCurrent)=>{
        if(!acumulado[currentElement]){
            acumulado[currentElement]=1;
        }else{
            acumulado[currentElement]++;
        }
        return acumulado;
    },
        {}
    )

    console.log("frecuenciaCorta" ,frecuenciaCorta);
    // function putElementOraddOne(acumulado, currentElement){
    //     if(!acumulado[currentElement]){
    //         acumulado[currentElement]=1;
    //     }else{
    //         acumulado[currentElement]++
    //     }
    //     return acumulado;
    // }
    const frecuenciaCorta2 = data
    .map(elemento=>elemento.level)    //un solo parametro en la funcion flecha y la funcion sin llaves no quiere return
    .reduce((acumulado , currentElement)=>{
        if(!acumulado[currentElement]){
            acumulado[currentElement]=1;
        }else{
            acumulado[currentElement]++
        }
        return acumulado;
    },
    {}
    );


    console.log("frecuenciaCorta2:" ,frecuenciaCorta2);


//reto Agrupar numeros por rangos de un array y dar frecuencias de estos rangos.
// const arr1 = [];
// for(let i=0; i<100; i++){
//     arr1.push(parseInt(Math.random()*100))
// }
// console.log(arr1);
const arr1 =[ 39,
    6,
    27,
    44,
    46,
    18,
    37,
    78,
    42,
    4,
    73,
    73,
    24,
    37,
    7,
    42,
    86,
    63,
    18,
    49,
    53,
    39,
    25,
    52,
    92,
    13,
    66,
    7,
    52,
    82,
    39,
    20,
    26,
    16,
    81,
    53,
    44,
    1,
    23,
    5,
    18,
    75,
    94,
    72,
    90,
    34,
    20,
    85,
    11,
    98,
    30,
    46,
    49,
    70,
    18,
    78,
    41,
    8,
    76,
    41,
    8,
    8,
    40,
    6,
    43,
    73,
    0,
    4,
    63,
    29,
    59,
    91,
    26,
    77,
    24,
    32,
    3,
    89,
    29,
    70,
    87,
    30,
    52,
    88,
    18,
    72,
    72,
    67,
    18,
    68,
    8,
    84,
    9,
    59,
    74,
    95,
    59,
    14,
    91,
    87 ]
// ya tenemos vamos a obtener rangos:
const arrDeFrecuencias = arr1.reduce(
    (acumulado , currentElement , index)=>{
        let contador =1
        for(let i=10; i<=100; i+=10){
            
            if(currentElement<=i){
                if(acumulado[i]==undefined){
                    acumulado[i]=1;
                }  else{
                    contador++
                    acumulado[i] = contador;
                   
                }
            }  
        }
        return acumulado;
    },
    {}
);

console.log("arrDeFrecuencias : ", arrDeFrecuencias);

