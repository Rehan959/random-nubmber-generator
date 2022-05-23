let genrate = document.querySelector('#genrator');
let number = document.querySelector("#number");
  
let regenration = (num)=>{
  num = Math.floor((Math.random() * 1000) + 1);
 number.innerHTML=`Your Random Number is ${num}`
}
genrate.addEventListener('click',regenration);
