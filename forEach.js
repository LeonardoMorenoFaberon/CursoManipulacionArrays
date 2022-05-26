const letters =  ['a' , 'b' , 'c'];

for(let index= 0; index < letters.length; index++){
    console.log(letters[index]);
}

console.log((letters.forEach));
letters.forEach(element => {console.log(element);});

console.log("i in letters");
for(i in letters){console.log(letters[i])}  
