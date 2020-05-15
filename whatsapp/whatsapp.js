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

    let newMessageLeft=new wp(inputLeft);

    createMessageLeft(newMessageLeft);
})

function createMessageLeft(new1){

    let liLeft=document.createElement('li');
    liLeft.classList.add('li-left');
    let br=document.createElement('br');
    
    liLeft.innerHTML=new1.fullmessage();

    ulLeft.appendChild(liLeft);
    ulLeft.appendChild(br);

    let inputLeft=document.getElementById('inputLeft').value='';

}