let btnFirst=document.getElementById('add1');

let secondCol=document.getElementById('secondCol');



btnFirst.addEventListener('click',function(){

    secondCol.style.display='block';
    
    // console.log(secondCol.style.display);


});

let addRight=document.getElementById('addContact');
addRight.addEventListener('click',function(){

    secondCol.style.display='block';
    
    // console.log(secondCol.style.display);


});

/////////////////////// Nav functions //////////////
let a11=document.getElementById('a11');
let a12=document.getElementById('a12');
let a13=document.getElementById('a13');

let divMain=document.getElementById('in');

a11.addEventListener('click',function(){

    divMain.style.right='0px';
    a11.classList.add('active');
    a13.classList.remove('active');
    a12.classList.remove('active');

});

a12.addEventListener('click',function(){

    divMain.style.right='253px';
a12.classList.add('active');
a11.classList.remove('active');
a13.classList.remove('active');

});

a13.addEventListener('click',function(){

    divMain.style.right='506px';
    a13.classList.add('active');
    a11.classList.remove('active');
    a12.classList.remove('active');



});








////////////Displayi none olan   Add button    //////////////
let btnSecond=document.getElementById('add2');

let inputName=document.getElementById('inputName');

let inputNumber=document.getElementById('inputNumber');

let ul=document.getElementById('ul');

// let allContacts=[];

let count1=0;



 inputNumber.addEventListener('click',function(){
 
//    let t=inputNumber.value;

   inputNumber.value=`+994 `;


 });

 inputNumber.addEventListener('keydown',function(){

    let t=inputNumber.value;


 });

btnSecond.addEventListener('click',function(){

    if(inputName.value==''){
       alert('Ad daxil edin');
      return;
    }

    if(inputNumber.value==''){
        alert('Nomre daxil edin');
      return;
    }

    
    
    let li=document.createElement('li');

    let a=document.createElement('a');
    a.classList.add('btn','a-tag3');
    a.setAttribute('id',`data-${count1++}`)
    li.appendChild(a);

    let img=document.createElement('img');
    img.setAttribute('src','https://inlandfutures.org/wp-content/uploads/2019/12/thumbpreview-grey-avatar-designer.jpg');
    a.appendChild(img);

    let h6=document.createElement('h6');
    h6.textContent=inputName.value;
    a.appendChild(h6);

    let p=document.createElement('p');
    p.textContent=inputNumber.value;
    a.appendChild(p);

    let icon=document.createElement('i');
    icon.classList.add('fas','fa-phone-alt');
    a.appendChild(icon);


a.addEventListener('click',function(){
    
let id= a.getAttribute('id');
// aass(id);
// console.log(id);



let theFirst=document.getElementById('theFirst');

theFirst.style.display='none';

let allContacts=document.getElementById('allContacts');

allContacts.style.display='block';

let p=document.querySelector('#allContacts .card-body p');

p.textContent=id;






});


    ul.appendChild(li);

     inputName.value='';
     inputNumber.value='';

    secondCol.style.display='none';

});


/////////////////////////////////////             Change contacts functions below                            ////////////////////////////// 

let lastInput1=document.getElementById('inputNameChange');


let lastInput2=document.getElementById('inputNumberChange');

let btnChange=document.getElementById('btn-change');


btnChange.addEventListener('click', aass);



lastInput2.addEventListener('click',function(){
    
    lastInput2.value=`+994 `;    
    
     });


function aass(id){
    // let fg=`${id}`;
    // console.log(fg);

    if(lastInput1.value==''){
        alert('Ad daxil edin');
       return;
     }
 
     if(lastInput2.value==''){
         alert('Nomre daxil edin');
       return;
     }



    let theFirst=document.getElementById('theFirst');

    theFirst.style.display='block';

    let allContacts=document.getElementById('allContacts');

    allContacts.style.display='none';

    let p=document.querySelector('#allContacts .card-body p').textContent;


    let h6=document.querySelector(`#${p}>h6`);

    h6.textContent=lastInput1.value;

    let small=document.querySelector(`#${p}>p`);

    small.textContent=lastInput2.value;



    console.log(h6);    
    
    // let idchanger=id;

};

let btnDelete=document.getElementById('btn-delete');


btnDelete.addEventListener('click',function(){

    let p=document.querySelector('#allContacts .card-body p').textContent;

    let li=document.getElementById(p).parentElement;


    li.parentElement.removeChild(li);

    // console.log(li);

    let theFirst=document.getElementById('theFirst');

    theFirst.style.display='block';

    let allContacts=document.getElementById('allContacts');

    allContacts.style.display='none';


});
