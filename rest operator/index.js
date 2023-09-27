const fruits= ['apples','orange','lemon','banana'];
const [first,second,...restOfTheFruits]=fruits;
console.log(first,restOfTheFruits);


const specificFruit= restOfTheFruits.find((fruit)=> fruit === 'lemon');
console.log(specificFruit);

//object
const person= {name:"Parth", lastname:"Deshpande",job:"Developer"};
const { job,...rest } =person;
console.log(job,rest);

//function

const getAverage= (name,...scores)=>{
    console.log(name);
    console.log(scores);
    const average=scores.reduce((total,item)=>{return total += item},0)/scores.length;
    console.log(average);
}
//console.log(person.name,89,76,81,100);
const testScores=[23,45,67,89];
getAverage(person.name,...testScores);
console.log(person.name,89,76,81,100);
