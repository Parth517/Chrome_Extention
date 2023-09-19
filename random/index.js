/*let randomNumber=Math.floor(Math.random() * 6)+1;
 
console.log(randomNumber);
let flooredNumber=Math.floor(3.4265);
console.log(flooredNumber);*/ 

function rollDice(){
    let randomNumber=Math.floor(Math.random() * 6)+1;
    return randomNumber;
}

console.log(rollDice());

let hasCompletedCourse=true;
let givesCertificate=false;

if (hasCompletedCourse===true && givesCertificate ===true){
    generateCertificate();
}else if(hasCompletedCourse === false && givesCertificate ===true){
    console.log("Please complete the course to get a certificate");
}else if(hasCompletedCourse===true && givesCertificate === false){
    console.log("This course doesnt give a certificate");
}else{
    console.log("Please complete the course");
}

function generateCertificate(){
   console.log("Generating Certificate");
}

let hasResolvedChallenge= false;
let hasHintsLeft=false;

if (hasResolvedChallenge===false && hasHintsLeft === true){
    console.log("You can use the hints for solution");
}else if(hasResolvedChallenge=== false && hasHintsLeft===false){
    showSolution();

}

function showSolution(){
    console.log("Showing Solution...")
}
let likesDocumentary=true;
let likeStories=false;
if (likeStories===true || likesDocumentary===true){
    recommandMovie();
}
function recommandMovie(){
    console.log("Hey! Chechk out this new film you would like it")
}