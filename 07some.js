const numbers = [1,2,3,4,5]

const rta2 = numbers.some((value, index)=>{return value>=3});

console.log(rta2);


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


//   orders.some((orden.delivered)=>{return orden.delivered} )
 console.log( "alguna orden fue entregada: " , orders.some(item=>item.delivered) );

 