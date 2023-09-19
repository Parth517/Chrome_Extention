//let name = "Parth";
//console.log(name);

//let firstName = "Parth";
//let lastName = "Deshpande";


//const intrestRate=0.3;
//console.log(intrestRate);

//Premative types 
//1)String 2)Number  3)Boolean 4)undefined 5)Null es6 after Symbol

//Reference types
//1)objects 2)arrays and functions

/*let person={
    name:"Parth",
    age:21,
};

//Dot notation
person.name='John',

//Bracket notation
person['name']='Tanmay',
console.log(person.name);*/

//Arrays:Data structure used to represnt a range of items

/*let selectedColours=['red','blue'];
selectedColours[2]='green';
selectedColours[3]=45;
console.log(selectedColours.length);

//Fuction
//performing a task
function greet(name,lastName){
   console.log('Hello ' + name +' '+ lastName);
}
greet('Parth','Deshpande');
*/
/*function square(number){
    return number*number;
}

console.log(square(2));*/

/*let myAge= 21;
humanDogRatio=7;
myDogAge=myAge*humanDogRatio;

console.log(myDogAge);*/

/*let count=5

count=count+1;

console.log(count);


let bonusPoints=50;
bonusPoints=bonusPoints+50;
bonusPoints=bonusPoints-75;
bonusPoints=bonusPoints+45;

console.log(bonusPoints);*/



let count = 0; 
let countEl=document.getElementById('count-el');
let saveEl=document.getElementById('save-el');

function increment(){
    count+= 1;
    countEl.textContent=count;
    
}

function save(){
    //To show the previous entries below the save button
    countStr= count+ " - ";
    saveEl.textContent += countStr;
    console.log(count);
    count=0;
    countEl.textContent=count;

}


/*
let username="Parth";
let message="You have 3 new notifications";

messageToUser= message+","+username + "!";
console.log(messageToUser);*/

let names="Parth";
let greeting="My name is ";
let myGreetings=greeting+names;
console.log(myGreetings);
greet="Welcome Back ";

let welcomeEl=document.getElementById('welcome-el');

welcomeEl.innerText=greet+names;

welcomeEl.innerText +=' :)';
