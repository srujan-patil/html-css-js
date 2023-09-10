const menu = document.querySelector("#menu");
const background = document.querySelector(".background");
const sidenav = document.querySelector('.sidenav');
const ri = document.querySelector('#ri');






menu.addEventListener('click',function(){
    background.style.transform = 'translateX(200px) scale(.80) rotateY(-6deg) skewY(3deg)';
    background.style.filter='blur(1.5px)';
    sidenav.style.left = '2%';
    
})

ri.addEventListener("click",function(){
    background.style.transform = 'translateX(000px) scale(1)';
    background.style.filter='blur(0px)';
    sidenav.style.left = '-10%';
    
})

