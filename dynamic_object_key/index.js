const person = {
    name:"Parth"
};
console.log(person.name);
person.age=25;
console.log(person);

//squre bracket notation
const items={
    'featured-items':['item1','item2'],
};

console.log(items["featured-items"]);
console.log(person['name']);

let appState='loading';
appState="error";
const keyName="computer";

const app ={
    [appState]:true,

}
app[keyName]='apple';
console.log(app);

const state={
    loading:true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key]=value
}

updateState('job','developer');
updateState('loading',false);
updateState('name',"Parth");  
updateState('name',"Peter");
updateState('product',"mango");
console.log(state);