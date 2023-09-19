//create 2 vRIABLES firstCard and secondCard between 2 & 11
/*
let age=100;
timeToQualify=100-age;
whenRecieved=age-100;

if(age< 100){
    console.log("You are not eligble.You will have to wait "+timeToQualify+' Year/s to get a card');
}
else if(age ===100){
    console.log("Congrats! You have turned 100 you are eligible to get a card from the king");
}
else{
    console.log("You are not eligible as you have already gotten a card from the king "+whenRecieved+" Years ago");
}*/


let cards=[];
let messageEl=document.getElementById('message-el');
//let sumEl=document.getElementById('sum-el');
let sumEl=document.getElementById('sum-el');
let cardsEl=document.getElementById('cards-el');
let sum = 0;
let hasBlackJack= false;
let isAlive=false;
let message="";
let player={
    Name:"Parth",
    Chips: 150,
    //methods:functions attached to objects
    sayHello: function(){
        console.log("heisann!")
    }
};

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.Name + ": $"+player.Chips;


function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10){
        return 10;
        
    }else if(randomNumber === 1){   
        return 11;
    }else{
        return randomNumber;
    }  
    
}
 
function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    
    cardsEl.textContent ="Cards: ";
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + ' ';
    }
    sumEl.textContent = 'Sum: '+ sum;
    if (sum <= 20){
        message =("Do you want to draw a New Card");
         
        
    }else if(sum === 21){
        message=("You Have Won The Game!");
        hasBlackJack=true;
         
         
    }else{
        message=("You Have lost the game")
        isAlive=false;
        
    }
   messageEl.textContent=message;

}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard=getRandomCard();
    sum += newCard;
    cards.push(newCard);
    
    sumEl.textContent ="Sum: " + sum
    renderGame();
    }
    
}


//Cash Out
//console.log(hasBlackJack);
//console.log(isAlive);