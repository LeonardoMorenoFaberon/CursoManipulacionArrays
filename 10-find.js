const numbers = [1,30,49,29,10,13];


let rta = undefined;
for(let index=0;index<numbers.length; index++){
    const element =numbers[index];
    if(element>=20){
        rta=element;
        break;
    }
}
console.log("for " , rta)

console.log(
    "numbers.find((number, index)=>{number===30}).... me devuelve : ",
    numbers.find((number, index)=>number===30)
)


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  let rta3 =    products.find((item)=>item.id='🍔');

  console.log("find" ,rta3);


