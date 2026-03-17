const original = {
    name:'day2',
    module:'node',
    type: 'Assignment'
}

const copy={...original,mode:'online'};

console.log(original);
console.log(copy);


// Task 2
//merge two arrays
const array1=['one','two','three'];
const array2=[10,20,30];

const mergeArray=[...array1,...array2];
console.log(mergeArray);

//merge two objects
const obj1={
    name:'object1',
    type:'object1',
    value:66
}
const obj2={
    name:'object2',
    type:'object2'
}

const mergeObj={...obj1 ,...obj2};

console.log(mergeObj);

//rest-parameter function that accepts any number of scores and returns their average
function avgFunction(...scores){
    if(scores===0)return 0;

    let sum=0;

    for(let score of scores){
        sum+=score;
    }
    return sum/scores.length;
}
console.log(avgFunction(2,4,6,8));

//task 3
//Destructuring
const cities=['Pune','Mumbai','Nagpur','Delhi','Surat'];
const [city1,city2,city3]=cities;
console.log(city1,city3);

const person ={
    userName:'Madhura',
    age:24,
    city:'Pune',
    gender:'Female'
}

const {userName,age,gender}=person;
console.log(userName,age,gender);


//promise
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
delay(2000).then(()=>{
    console.log("Done waiting.");
});