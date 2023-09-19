const playerName="Parth";
let credits = 45;

credits = credits - 5;

let containerEl=document.getElementById("container");

containerEl.innerHTML = "<button onclick='buy()'> Buy!!</button>";

function buy(){
    containerEl.innerHTML+="<p>Thanks For Buying from Us!!</p>"
}