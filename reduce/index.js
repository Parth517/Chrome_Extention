const staff = [
    { name:'Parth',age:20,position:"developer",salary:150},
    { name:'John',age:22,position:"designer",salary:100},
    { name:'Jack',age:35,position:"boss",salary:300},
    { name:'Arun',age:30,position:"intern",salary:10},
 ];
 
 const dailyTotal= staff.reduce((total,person)=>{
    console.log(total);
    console.log(person.salary);
    total +=person.salary;
    return total;
 },0)
 console.log(dailyTotal);