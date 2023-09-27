const fruits = ['Orange','Apples','Lemons'];
const friends= [ 'Parth','John','Jack','Harry','Arun'];

const fruit1=fruits[0];
const fruit2=fruits[1];
const fruit3=fruits[2];

console.log(fruit1,fruit2,fruit3);

//destruction

const [Parth,,Jack, ,Arun] = friends

console.log(Parth,Jack, Arun);
 
let first='Parth';
let second='John';
/*let temp =second;
second=first;
first=temp;*/

[second,first] = [first,second]

console.log(first,second);

