const sum = (a,b) =>{
    return new Promise((resolve ,reject)=>{
        // let a=20;
        // let b=40;
        if(a+b>55){
            return resolve(new Promise(()=>{
                console.log(a+b);

            }));
        }
        else{
            return reject("sum of a & b is less than 55");
        }
    })
}

// consumer
//multiple .then can be there
sum(50,6).then((res)=>{
    console.log(res);

}).then((res)=>{
    console.log(res);

})
.catch((err)=>{
    console.log(err);

}).finally(()=>{
    console.log("code executes everytime");

})

//fetch
fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);

})