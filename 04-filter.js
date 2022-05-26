const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const arrfor=[];

for(i in words){
    if(words[i].length>=6){
        arrfor.push(words[i]);
    }
}

const arr1 = words.filter(item=>{
    return item.length>=6
});


console.log("arrfor " + arrfor);
console.log("arr1 "+arr1);


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


  const entregadas = orders.filter(item=>item.delivered)
  const entregadasYMayor100 = orders.filter(  item=> (item.delivered && item.total>=100) )

  console.log("entregadas : " , entregadas);
  console.log("orders :" ,orders);
  console.log("entregadasYMayor100 :" ,entregadasYMayor100)
  
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment= {
    startDate:new Date(2021,1,1,19),
    endDate:new Date(2021,1,1,20,30)
  }

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

