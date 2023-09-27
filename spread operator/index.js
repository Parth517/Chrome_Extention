//Spread Operator
//Allows and iteratesto spread/expend individually inside receiver


const udemy='bob';
const letters=[...udemy]
console.log(letters);

const boys=['john','paul','harry'];
const girls=['anna','susan'];

const bestFriend='arnold';

//const friends=[boys,girls,bestFriend];
const friends=[...boys,bestFriend,...girls];
console.log(friends);

//const newFriends = friends;
const newFriends=[...friends];
newFriends[0]="nancy";
console.log(friends);
console.log(newFriends);


const person= {name:"john",job:"developer"};
const newPerson={...person,city:'Valsad',name:"Peter",};
console.log(person);
console.log(newPerson);