 
/*for (let count=10;count<=100;count++){
    console.log(count);
}*/
 
let message= [
    "Hey,how's it going",
    "I am great.How are you?",
    "All good. Been working on my portfolio",
    "Same here!",
    "great to hear",
    "abc"
];

for (let i=0; i<message.length; i++){
    console.log(message[i]);
}

let cards=[7,3,9];

for(let i=0;i<cards.length;i++){
    console.log(cards[i]);
}
let sentence=["Hello","How","Are","You"]
let greetingEl=document.getElementById('greeting-el');

for(let i=0;i<sentence.length;i++){
    greetingEl.textContent += ' '+sentence[i];
}

let player1Time=103;
let player2Time=110;
function getFasterRaceTime(){
    if(player1Time<player2Time){
        return player1Time;
    }else if(player2Time>player1Time){
        return player1Time;
    }else{
        return player1Time;
    }
}
let fastestRace =getFasterRaceTime()
console.log(fastestRace);
function totalTime(){
    return player1Time+player2Time;
}

let timeToFinish=totalTime();
console.log(timeToFinish);