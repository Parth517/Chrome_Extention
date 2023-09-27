const menu =[
    {
        name:"pancake",
        category:"breakfast",
    },
    {
        name:"burger",
        category:"lunch"
    },
    {
        name:"pizza",
        category:"dinner"
    },
    {

        name:"bread butter",
        category:"breakfast"
    },
    {
        name:"eggs",
        category:"breakfast"
    },
    {
        name:"pasta",
        category:"dinner"
    }
];
//set is used to get unique value
const categories=['all',...new Set(menu.map((item)=>item.category))];
console.log(categories);

const result=document.querySelector('#result');
result.innerHTML=categories.map((category)=>{
    return`<button>${category}</button>`
}).join('');
