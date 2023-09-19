
let course={
    title:"Learn CSS for free",
    lessons: 16,
    creator: "Parth Deshpande",
    length:63,
    levels:2,
    isFree:true,
    tags:[
        "html","css"
    ]
};
//console.log(course["title"]);
//console.log(course.isFree);

let castle={
    title:"An amazing Castle",
    isAvailable:true,
    price:140,
    services:[
        "Food","WiFi","Electricity"
    ]
}

//console.log(castle.title);
//console.log(castle.services);

let person = {
    name:"Parth",
    age:21,
    country:"India",
    
}
function logData(){
    console.log(person.name+" is "+ person.age+" Years old and lives in "+ person.country )
} 
logData();

let age = 90;
if (age<=6){
    console.log("your child can travel for free");
}else if(age>6 && age<=17){
    console.log("You get a child discount");
}else if(age>=18 && age<=26){
    console.log("You get a student discount");
}else if(age>=27 && age<=66){
    console.log("You have to pay full price");
}else{
    console.log("You get a senior citizen discount");
}

let largeCountries=["Tuvulu","India","USA","Indonesia","Monaco"];
largeCountries.pop();
console.log(largeCountries);
largeCountries.push("Canada");
largeCountries.shift();
largeCountries.unshift("China");
console.log("The 5 Largest Countries in the world are: ");
for(let i =0; i<largeCountries.length;i++){
    console.log(i+")"+largeCountries[i]);
}

let dayOfMonth=13;
let weekday="Friday";

if(dayOfMonth===13 && weekday === "Friday"){
    console.log("You are going to die today!!!!");
}else{
    console.log("You are safe for now");
}

let hands=["rock","paper","scissor"];

function getHand(){
    let randomIndex = Math.floor(Math.random()*3 );
    return hands[randomIndex];

}

console.log(getHand())

let fruits=['Apple',"Orange","Apple","Apple","Orange"];
let appleShelf=document.getElementById('apple-shelf');
let OrangeShelf=document.getElementById('orange-shelf');
for(let i=0 ; i<fruits.length; i++){
    if(fruits[i] === "Apple"){
        appleShelf.textContent +=fruits[i];
    }else{
        OrangeShelf.textContent +=fruits[i];
    }
}
//addEventListner
let boxEl=document.getElementById('box-el');
boxEl.addEventListener('click',function(){
    console.log("The box has been opened");
})