{/* <li class="li-left">salam</li>
<br>
<li class="li-right">Necesen</li> */}

function wp(message){
this.message=message;

this.fullmessage=function(){
    return `${this.message}`
}
}

let inputRight=document.getElementById('inputRight');


let ulLeft=document.getElementById('ul-left');
let ulRight=document.getElementById('ul-right');

let btnLeft=document.getElementById('btn-left');
let btnRight=document.getElementById('btn-right');

btnLeft.addEventListener('click',function(){

    let inputLeft=document.getElementById('inputLeft').value;

    let newMessage=new wp(inputLeft);


    createMessageRight(newMessage);
    createMessageLeft(newMessage);

})


// let delayLeft=setTimeout(createMessageLeft1,10000);

btnRight.addEventListener('click',function(){

    let inputRight=document.getElementById('inputRight').value;

    let newMessage=new wp(inputRight);

    createMessageLeft1(newMessage);
    createMessageRight1(newMessage);

})

function createMessageLeft1(new1){

  setTimeout(() => {
    let liLeft=document.createElement('li');
    liLeft.classList.add('li-left');
    let br=document.createElement('br');
    
    liLeft.innerHTML=new1.fullmessage();

    ulLeft.appendChild(liLeft);
    ulLeft.appendChild(br);

    let inputLeft=document.getElementById('inputLeft').value='';
    let inputRight=document.getElementById('inputRight').value='';

  }, 1000);
}

function createMessageRight1(new1){

    let liRight=document.createElement('li');
    liRight.classList.add('li-right');
    let br=document.createElement('br');
    
    liRight.innerHTML=new1.fullmessage();

    ulRight.appendChild(liRight);
    ulRight.appendChild(br);

    let inputRight=document.getElementById('inputRight').value='';
    let inputLeft=document.getElementById('inputLeft').value='';

}

function createMessageLeft(new1){
setTimeout(() => {
    
    let liLeft=document.createElement('li');
    liLeft.classList.add('li-left');
    let br=document.createElement('br');
    
    liLeft.innerHTML=new1.fullmessage();

    ulRight.appendChild(liLeft);
    ulRight.appendChild(br);

    let inputLeft=document.getElementById('inputLeft').value='';
    let inputRight=document.getElementById('inputRight').value='';

}, 1000);
}

function createMessageRight(new1){

    let liRight=document.createElement('li');
    liRight.classList.add('li-right');
    let br=document.createElement('br');
    
    liRight.innerHTML=new1.fullmessage();

    ulLeft.appendChild(liRight);
    ulLeft.appendChild(br);

    let inputRight=document.getElementById('inputRight').value='';
    let inputLeft=document.getElementById('inputLeft').value='';

}