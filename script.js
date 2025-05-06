"Use strict";
const  btnEl=document.getElementById('btn');
const body=document.querySelector('.body');

btnEl.addEventListener("click", function(){

    function getRandomColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    
    function changeBackgroundColor(){
        body.style.backgroundColor=getRandomColor();
    }
    changeBackgroundColor();
});


