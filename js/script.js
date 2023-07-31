let weight=document.getElementById('weight')
let height=document.getElementById('height')
let weightval=document.getElementById('weight-val')
let heightval=document.getElementById('height-val')
let result=document.getElementById('result')
let category=document.getElementById('category')
let body=document.querySelector('.body')
let pcontainer=document.querySelector('.p-container')
let x=document.querySelector('.X')
function bmi(){
    let w=weight.value
    weightval.innerHTML=w+'kg'
   let h=height.value
    heightval.innerHTML=h+'cm'
    let yourbmi=(w/(Math.pow(h/100,2))).toFixed(1)
    result.innerHTML=yourbmi
    if(18.15<=yourbmi<=24.9){
category.innerHTML='Normal weight'
result.style.color='green'
body.style.background='green'
pcontainer.style.display='none'
    }
    if(yourbmi<18.15){
        category.innerHTML='Under weight'
        result.style.color='yellow'
        body.style.background='yellow'
        pcontainer.style.display='none'
            }
            else if(yourbmi>24.9){
                category.innerHTML='Obese'
                result.style.color='red'
                body.style.background='red'
                pcontainer.style.display='block'
                x.addEventListener('click',function(){
                    pcontainer.style.display='none'
                })
            }
        

}
weight.addEventListener('input',bmi)

height.addEventListener('input',bmi)