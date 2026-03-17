const name="Bhargavi";
const age=23;
const hobby ="drawing";

console.log("Hii I'm "+ name+". I'm" +age+" old "+" my hobby is "+hobby);

//2. 

const square=(n)=>n*n;
console.log("Square of 5 is",square(5));

//3.
const isEven=(n)=>n%2===0;
console.log("Is 8 even",isEven(8));

//Arrays
const fruits=["Apple","Banana","Mango","kiwi","orange"];

const upperFruits = fruits.map(fruit=>fruit.toUpperCase());
console.log("Fruits in upper case",upperFruits);

const longFruits=fruits.filter(fruit=>fruit.length>5);
console.log("Fruits with more than 5 character",longFruits);

//4.Objects 

const student={
    name:"Bhargavi",
    course:"CDAC",
    year:2026
};

console.log("Student Name:",student.name);
console.log("Course:",student.course);
console.log("Year",student.year);

const[fruit1,fruit2]=fruits;

console.log("First Fruit:",fruit1);
console.log("Second Fruit:",fruit2);

