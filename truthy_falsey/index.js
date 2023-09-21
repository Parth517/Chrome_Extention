console.log(Boolean(""));
console.log(Boolean(0))

const welcomeEl = document.getElementById('welcome-el');

function greetUser(greeting, name,emoji){
    welcomeEl.textContent=`${greeting},${name} ${emoji} `;
}

greetUser("Howdy","Parth",":)");
 
function add(num1,num2){
    sum=num1+num2;
    return sum;
}

console.log(add(3,4));
console.log(add(9,102));

function getFirst(array){
    return (array[0]);
}

let arrValue=getFirst(["abc","def"])
console.log(arrValue);