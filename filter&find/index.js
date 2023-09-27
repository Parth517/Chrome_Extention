const people = [
   { name:'Parth',age:20,position:"developer"},
   { name:'John',age:22,position:"designer"},
   { name:'Jack',age:35,position:"boss"},
   { name:'Arun',age:30,position:"intern"},
];

//filter
const youngPeople=people.filter((person)=>{
    //if (person.age <30){
        //return person;
    //};
    return person.age<30;
});
console.log(youngPeople);
const developers = people.filter((person)=>person.position ==='developer');
console.log(developers);
//no match
const seniorDevs = people.filter((person)=>person.position==='senior dev');
console.log(seniorDevs);

//find
const john=people.find((person)=>person.name==='John');
console.log(john);

const oldPerson = people.find((person)=>person.age >35);
console.log(oldPerson);
//find return ingle instance,returns first match
const randomPerson=people.find((person)=>person.age<35);
console.log(randomPerson);


const parth = people.filter((person)=>person.name==='Parth');
console.log(john.position);
console.log(parth[0].position);