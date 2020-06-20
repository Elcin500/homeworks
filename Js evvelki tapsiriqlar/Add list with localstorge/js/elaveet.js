let p508=[];

function loading(){

let bulk=localStorage.getItem('p508');


if(bulk !=null ){
p508=JSON.parse(bulk);
loadStudents(p508);

}

}

window.addEventListener('load',loading);



function Student (name,surname,gender){

    this.name=name;
    this.surname=surname;
    this.gender=gender;

    // this.fullname=function(){
    //     return `${this.name} ${this.surname} ${gender}`
    // }

}

Object.prototype.fullname=function(){
    return `${this.name} ${this.surname}`
}


function getId(id){

    return document.getElementById(id).value;

}

const btnAdd=document.getElementById('add');
const btnSelectMales=document.getElementById('selectMales');
const btnSelectFemales=document.getElementById('selectFemales');
const btnClearSelection=document.getElementById('clearSelection');

const studentList=document.getElementById('list');



btnAdd.addEventListener('click',function(){

    let name=getId('name');
    let surname=getId('surname');
    let gender=getId('gender'); 

//  console.log(name,surname,gender);

let student= new Student(name,surname,gender);

p508.push(student);


let bulk=JSON.stringify(p508);

localStorage.setItem('p508',bulk);


loadStudents(p508);



/////////////////////////////////////////////////////////////////



 //studen=document.createElement('li');

 //studen.textContent=student.fullname();                             //  Bu 3u menim yolumdur.Ve bezi seyleri bunnan elemek olmur


 //studentList.appendChild(studen);

///////////////////////////////////////////////////////////////////////


});


function loadStudents(p508){
    studentList.innerHTML='';

    p508.forEach(function (student,index){

        let stuli=document.createElement('li');

        stuli.textContent=student.fullname();

        stuli.setAttribute('data-id',index);
        

      studentList.appendChild(stuli);

    });
}



// Javid Mehdibayli
// Amrah Rahmanov
// Aghasaf Mammadli
// Elcin Esgerov
// Elmin Tagiyev
// Emin Ismayilov
// Farid Nuruyev
// Gulbahar Mammadova
// Ilaha Mammadova
// Kamran Orujov
// Madina Aliyeva
// Mahmud Yusifli
// Narmin aliyeva
// Orkhan Huseynli
// Orkhan Ibrahimov
// Saftar akbarov
// Sara ahmadova


// const btnSelectMales=document.getElementById('selectMales');




function Stu (name,surname,gender){
this.name=name;
this.surname=surname;
this.gender=gender;


this.full=function(){
    return `${this.name} ${this.surname} `
}



}


let qrup=[];
const male='Kisi' , female='Qadin';



let s1=new Stu('Javid ','Mehdibayli',male);
let s2=new Stu('Elcin ','Esgerov',male);
let s3=new Stu('Amrah ','Rahmanov',male);
let s4=new Stu('Aghasaf ','Mammadli',male);
let s5=new Stu('Elmin ','Tagiyev',male);
let s6=new Stu('Emin ','Ismayilov',male);
let s7=new Stu('Farid ','Nuruyev',male);
let s8=new Stu('Gulbahar ','Mammadova',female);
let s9=new Stu('Ilaha ','Mammadova',female);
let s10=new Stu('Kamran ','Orujov',male);
let s11=new Stu('Madina ','Aliyeva',female);
let s12=new Stu('Mahmud ','Yusifli',male);
let s13=new Stu('Narmin ','Aliyeva',female);
let s14=new Stu('Orkhan ','Huseynli',male);
let s15=new Stu('Saftar ','Akbarov',male);
let s16=new Stu('Sara ','Ahmadova',female);


qrup.push(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16);



   
   btnSelectMales.addEventListener('click',function(){
    let bringMales= qrup.filter(function(telebe,index,arr){

        return telebe.gender == male;
        

      
       
       })
       studentList.innerHTML='';
    
       for (let index = 0; index <bringMales .length; index++) {
           const last = bringMales[index];

           
           let ali=document.createElement('li');

           ali.textContent=last.full();
           
           studentList.appendChild(ali);

       }

   });

   /////////////////////////////////////////////////////////////////////Down Female//////////////////////

   
   btnSelectFemales.addEventListener('click',function(){
    let bringMales= qrup.filter(function(telebe,index,arr){

        return telebe.gender == female;
        

      
       
       })
       studentList.innerHTML='';

    
       for (let index = 0; index <bringMales .length; index++) {
           const last = bringMales[index];

        


           let ali=document.createElement('li');

           ali.textContent=last.full();
           
           studentList.appendChild(ali);

       }

   });



//////////////////////////////////////////Add all//////////////////////////////////////



btnClearSelection.addEventListener('click',function(){

       studentList.innerHTML='';
   
    
       for (let index = 0; index <qrup .length; index++) {
           const last = qrup[index];

        


           let ali=document.createElement('li');

           ali.textContent=last.full();
           
           studentList.appendChild(ali);

       }

   });