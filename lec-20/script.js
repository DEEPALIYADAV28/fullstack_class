//HOF
function calculator(a,b,sign,add,sub,mul,divi){
    // let a=20;
    // let b=30;
    if(sign == '+'){
        console.log(add(a,b));
    }
    else if(sign=='-'){
        console.log(sub(a,b));
    }
    if(sign='*'){
        console.log(mul(a,b));
    }
    if(sign=='/'){
        console.log(divi(a,b));
    }
}
function fun1(){
    let a=10;
    let b=20;
    // function fun2(){
    return () => {   //arrow function
        let c=40;
        // function fun3(){
        return () => {
            return a+b+c;
        }
        return fun3;
        // return a+b;
    }
    // return fun2;
}
// callback functions:-
function add(a,b){
    return a+b;
}
// console.log(fun1());
// console.log(fun1()()());
let returnFun=fun1();
// console.log(returnFun());

function sub(a,b){
    return a-b;
}
//------------------------------------------------------------------------------//
let person={
    name:"Devika",
    age:20,
    education:"btech"
};
function mul(a,b){
    return a*b;}
for(let idx in person){
    // console.log(person[idx]);
}
//object is not iterable so for of cannot be applied
// for(let idx of person){
//     console.log(person[idx]);
// }

function divi(a,b){
    return a/b;}
//------------------------------------------------------------------------------//
//map
let arr=[1,2,3,4,5,6];
function mymap(item){
return item*3;
}

// calculator(add,sub,mul,divi);
calculator(2,3,'+');
let newArr=arr.map(function mymap(item){
    return item*3;
    });
let newArr1 = arr.map(item => item*5);
// console.log(newArr);
//------------------------------------------------------------------------------//
//filter
let filteredArr=arr.filter(item => (item%2!=0));
// console.log(filteredArr);
//------------------------------------------------------------------------------//
//reduce
let reducedArr=arr.reduce((acc,currValue) => {acc=acc+currValue;return acc;},0);
// console.log(reducedArr);
//------------------------------------------------------------------------------//
//for each(does not return a new array)
let newArr2=arr.forEach((item)=>item*2);
console.log(newArr2);
//------------------------------------------------------------------------------//
//Given an array of numbers,filter out the even numbers then double the value of
//remaining numbers & then calculate their sum.
let arr1=[15,19,20,22,18,13,16,11];
let filteredArr1=arr1.filter(item=>(item%2!=0));
let mappedArr=filteredArr1.map(item=>item*2);
let sum=mappedArr.reduce((acc,currValue) => {acc=acc+currValue;return acc;},0)
console.log(sum);


