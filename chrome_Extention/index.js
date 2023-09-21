
let myLeads=[];

//myLeads=JSON.stringify(myLeads);
const inputEl=document.getElementById('input-el');
const inputBtn=document.getElementById('input-btn');
const ulEl=document.getElementById('ul-el');
const deleteBtn=document.getElementById('delete-btn');
const tabBtn=document.getElementById('tab-btn');
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
} 

const tabs= [
    {url:"https://www.linkedin.com/in/parth-deshpande/"}
]
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active :true, currentWindow:true}, function(tabs){
        console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",Json.stringify(myLeads));
        render(myLeads);
        
    });
});

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        //listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>";
        //template String
        listItems +=`
        <li>
            <a target = '_blank' href='${leads[i]}'>${leads[i]}</a>
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

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);  
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})





