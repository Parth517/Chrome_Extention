//Array.from- Not on a Prototype

//from-returns Array Object from an object
//with a length property or an iterable object

const udemy = "udemy";
//console.log(Array.from(udemy));
const text=document.querySelectorAll('.text');
const newText=Array.from(text).find((item)=>item.textContent=== 'person');;
//console.log(newText);

//pagination using array.from
const items = Array.from({length:120},(_,index)=>{
    return index;
});
console.log(items);