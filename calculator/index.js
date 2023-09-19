let num1=8;
let num2=2;
let answer=0;
let answerText=document.getElementById("answer-el");
document.getElementById('num1-el').textContent=num1;
document.getElementById('num2-el').textContent=num2;
//Add
function Add(){
    
    answer=num1+num2
    answerText.textContent +=answer;
    console.log(answer);
}
function Subtract(){
    answer=num1-num2;
    answerText.textContent += answer;
    console.log(answer);
}
function Divide(){
    answer=num1/num2;
    answerText.textContent += answer;
    console.log(answer);
}
function Multiply(){
    answer=num1*num2;
    answerText.textContent += answer;
    console.log(answer);
}
