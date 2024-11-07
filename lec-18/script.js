let arr=[2,3,4,5,6];
// let arr1=arr;
let arr1=[7,8,9,10,11];
let arr2=[...arr,...arr1];//spread operator,rest,arrow
arr1.push("hello")
// let arr2=arr.slice(0);
let arr3=arr.concat(arr1);
console.log(arr);
// console.log(arr1);
// console.log(arr2);
console.log(arr3);
let person={
    fullname:"abcde",
    age:23,
    salary:343534,
    id:233,
    projectdetail:{
        projectId:123,
        projectTitle:"Code js"
    }
}
console.log(person);
console.log(person.age);//object chaining
console.log(person["age"]);
for(let key in person){
    console.log(key);
}
for(let key in person){
    console.log(person[key]);
}
for(let key in person){
    console.log(person.key);
}
//function statement
function sum(a,b){
    return a+b;
}
console.log(sum(4,6));
const multiply = function(a,b){
    return a*b;
}
console.log(multiply(4,6));
// function expression
// const sum = function(){
// }
// arrow function
const sub = (a,b) => {
    return a-b;
}
console.log(sub(15,3));
// const sum = () => {
// }