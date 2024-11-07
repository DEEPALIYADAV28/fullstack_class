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
    if(sign=='*'){
        console.log(mul(a,b));
    }
    if(sign=='/'){
        console.log(divi(a,b));
    }
}
// callback functions:-
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function divi(a,b){
    return a/b;
}
// calculator(add,sub,mul,divi);
calculator(2,3,'+');