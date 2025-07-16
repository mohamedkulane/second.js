const icon= document.querySelector("#icon")
// const icon2=document.querySelector("#icon2")
const menu=document.querySelector("#menu")

// icon.addEventListener("click",()=>{
//     menu.style.display="block"
//     icon.style.display="none"
//     icon2.style.display="block"
// })
// icon2.addEventListener("click",()=>{
//     menu.style.display="none"
//     icon.style.display="block"
//     icon2.style.display="none"
// })

icon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})

const bntincrement=document.querySelector("#increment")
const btndecrement=document.querySelector("#decrement")
const plus=document.querySelector("#plus")
let couter=0

bntincrement.addEventListener("click",()=>{
    couter++
    plus.innerHTML=`(${couter})`
})
btndecrement.addEventListener("click",()=>{
    if(couter>0){
    couter--
    plus.textContent=`(${couter})`
    }
  
})
