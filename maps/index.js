const people= [
    {
    name: "Parth",
    age:21,
    position:"developer"
    },{
    name:"John",
    age:26,
    position:"designer"
    },
    {
        name:"Jack",
        age:30,
        position:"boss",
    }
]
const getAges=(person) =>person.age *2;
const ages=people.map(getAges);
console.log(ages);
 
const newPeople= people.map((item)=>{
    return{
        firstName:item.name.toUpperCase(),
        oldAge: item.age+20,
    };
});
console.log(newPeople);
const names=people.map((person)=>`<h2>${person.name}</h2>`);
const result=document.getElementById('result');
result.innerHTML= names.join('');