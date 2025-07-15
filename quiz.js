const btndec=document.querySelector("#decre")
const btnicr=document.querySelector("#incre")
const counter=document.querySelector("#count")
const pri=document.querySelector("#cost")
let star=1;
let hore=600.72
btnicr.addEventListener("click",()=>{
    star ++
   let  charge=star * hore
    counter.textContent=star
    pri.textContent=charge.toFixed(2)
})
btndec.addEventListener("click",()=>{
    if(star>1){
        star --
    counter.innerHTML=star
    charge= star*hore
    pri.textContent=charge.toFixed(2)
    }
   
   
})
