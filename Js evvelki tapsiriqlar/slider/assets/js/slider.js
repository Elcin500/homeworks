let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let btn4=document.getElementById('btn4');

let ul=document.getElementById('ul');

let next=document.getElementById('next');
let prev=document.getElementById('prev');



btn1.addEventListener('click',function(){
  
    ul.style.left='0px';

});

btn2.addEventListener('click',function(){
  
    ul.style.left='-1140px';

});

btn3.addEventListener('click',function(){
  
    ul.style.left='-2280px';

});
btn4.addEventListener('click',function(){
  
    ul.style.left='-3420px';

});


next.addEventListener('click',function(){
let ulStyle=getComputedStyle(ul);

let leftLenght=ulStyle.left;

let ulWidth=ulStyle.width;


let converted=-(parseInt(leftLenght)-1140);

if(parseInt(ulWidth) <= converted){

    return ul.style.left='0px';
}

let b =parseInt(leftLenght)-1140;
ul.style.left=`${b}px`;
// console.log(converted)

});


prev.addEventListener('click',function(){
    let ulStyle=getComputedStyle(ul);

    let leftLenght=ulStyle.left;
    
    let ulWidth=ulStyle.width;
    
    if(leftLenght>='0px'){
        return ul.style.left='-3420px';
    }
    let b =parseInt(leftLenght)+1140;
    ul.style.left=`${b}px`;
    
// console.log(ul.style.left);
});

// setInterval(function(){
//     next.click();
// },4000);



///////////////////////////////////Burdan yuxari slider sekilin jsi idi


