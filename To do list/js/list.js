/* <div class="col ">
<h4>Javascript dom</h4>
<span>20:30-22:00 </span>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, consequatur, excepturi aut nihil
    tempora ad et delectus </p>
      <a href="#" class="text-danger">
                    <i class=" fas fa-trash"></i>
                </a>
</div> */
let esas=document.querySelector('#esas');
let addBtn=document.querySelector('button');
addBtn.addEventListener("click",add);


function add(c){

    let job=document.querySelector('#input').value;
    let basliq=document.querySelector('#input2').value;
    let time=document.querySelector('#input3').value;



let nework= add2(job,basliq,time);

esas.appendChild(nework);
job=document.querySelector('#input').value='';
basliq=document.querySelector('#input2').value='';
time=document.querySelector('#input3').value='';

}


function remove(l){
    l.preventDefault();
    let divremo=l.currentTarget.parentElement;

    // console.log(l.currentTarget);
    esas.removeChild(divremo);



}


function add2(dolist,dobasliq,dotime){
    

let dodiv=document.createElement('div');
 
dodiv.classList.add('col');

 let doh4=document.createElement('h4');
 
doh4.textContent=dobasliq;

dodiv.appendChild(doh4);

let dospan=document.createElement('span');

dospan.textContent=dotime;

dodiv.appendChild(dospan);

let dop=document.createElement('p');

dop.textContent=dolist;

dodiv.appendChild(dop);
    
let doa=document.createElement('a');

doa.addEventListener('click',remove);

// doa.setAttribute('href','#');
doa.classList.add('text-danger')

dodiv.appendChild(doa);

let doi=document.createElement('i');
doi.classList.add('fas','fa-trash');

 doa.appendChild(doi); 

return dodiv;

}


