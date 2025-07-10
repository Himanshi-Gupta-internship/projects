const light=document.getElementById('light')
const off=document.getElementById('off')
const on=document.getElementById('on')

on.addEventListener('click' , function(){
    light.style.backgroundColor = 'yellow'
})
off.addEventListener('click' , function(){
    light.style.backgroundColor = 'white'
})
