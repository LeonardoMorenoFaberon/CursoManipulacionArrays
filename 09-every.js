
const numbers = [1,30, 39, 29,10 ,13]
let rta =  true;
for(let index = 0; index<numbers.length ; index++){
    const element =  numbers[index];
    if(element>=40){
        rta =  false;
    }
}
console.log("for para afirmar lo contrario a lo que quiero validar me da: " , rta);

console.log( 
    "usando array.every((valor, index)=> valor<=40) ... me da : ",
    numbers.every((valor, index)=> valor<=40)
);


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];


  console.log(
      "team.every((valor, item)=>valor.age<=15)",
      team.every((valor, item)=>valor.age<=15)
  )

