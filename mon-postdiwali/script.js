let button=document.querySelectorAll('#btn');
let para=document.querySelector('.text')
button.addEventListner("click",()=>{
para.innerText="hello world";
para.innerHTML="<h1> good morning</h1>";
// inner text copies the content as itis even if it is a html element
para.style.color="red"
//all css properties is within style
para.style.border="2px solid green"
})
para.classList.add("praa4");
let parachild=para.childNodes[0];//first children
console.log(parachild);



console.log(para);
console.log(button);