const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  
const rta1 = orders.map(order => order.customerName);
const rta2 = orders.map(order => {
    order.tax = .19*order.total;
     return order});
const rta3 = orders.map(order => {
    return {...order, tax: .19*order.total}
})

// console.log("orders" , orders);
// console.log("rta1" , rta1);
// console.log("rta2"  , rta2);
// console.log("rta3" , rta3);


const rta4 =  orders.map(cObjeto =>{
  return {...cObjeto, agregado: cObjeto.total +cObjeto.total*0.19}
})

console.log(orders);
console.log(rta4);

//cambiar color background body
const body= document.querySelector("body");
body.style.backgroundColor = "black";

const persona = [{name1:"Nicolas", dni: "12344322" , curso:"op Grua Puente", fecha:"20/10/2020"}];

const personaCopia = persona.map(item =>{
  return { ...item , added:"hola"}

}) 
console.log(personaCopia);

