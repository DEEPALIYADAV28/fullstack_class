

// let name="deepali"
// let char='x'
// console.log(typeof(char))
// let salary;
// console.log(typeof(salary))
// let id=null;
// console.log(typeof(id))
// let value=BigInt("1213212432432432")
// console.log(typeof(value))
const arr=[1,'abcde',true,null,undefined,[]];
arr[5].push(3);//insert element at end
arr.pop()////delete element from end
arr.unshift("hello");//insert element from start
arr.shift()//delete element from start
// arr.slice(start idx,end idx)
// let newArr=arr.slice(2);
// console.log(newArr)
// console.log(arr)
// splice changes the original array while slice does not
// end index is included in splice while not in slice
let new1=arr.splice(2,4);
console.log(new1);
console.log(arr)
let s;
for(let i=0;i<arr.length;i++){
s=arr.indexOf(null);
}
for(let i in arr){
console.log(i);
}
for(let idx in arr){
console.log(arr[idx]);
}