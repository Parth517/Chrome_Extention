
let myLeads=[];
const inputEl=document.getElementById('input-el');
const inputBtn=document.getElementById('input-btn');
const ulEl=document.getElementById('ul-el');


let lead="www.awesomelead.com";


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads();
})



function renderLeads(){
let listItems="";
for(let i=0;i<myLeads.length;i++){
    //listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>";
    //template String
    listItems +=`
    <li>
        <a target = '_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
    </li>`
    //create Element
   // const li=document.createElement("li")
    //set Text content
    //li.textContent=myLeads[i];
    // append to ul
    //ulEl.append(li);
}
ulEl.innerHTML = listItems;
}

