window.addEventListener('load',loaded());


function loaded(){
let btnPlay0=document.getElementById('btnPlay0');
let leftCol=document.getElementById('left');

// let allAudios=document.getElementById('allAudios');


let music0=document.getElementById('audio');
let music1=document.getElementById('audio1');
let music2=document.getElementById('audio2');
let music3=document.getElementById('audio3');
let music4=document.getElementById('audio4');
let music5=document.getElementById('audio5');
let music6=document.getElementById('audio6');
let music7=document.getElementById('audio7');
let music8=document.getElementById('audio8');







btnPlay0.addEventListener('click',function(){

    leftCol.innerHTML='';
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music8.pause();

    music0.play();
  

let musicName=document.getElementById('name').textContent;



let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);



a.addEventListener('click',function(){
   music0.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music0.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);


   })

});
});

//////////////////////////////////////////////////////////////22222/////////////////////////////////////////////


btnPlay1.addEventListener('click',function(){

    leftCol.innerHTML='';
    music0.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music8.pause();
    music1.play();

let musicName=document.getElementById('name1').textContent;



let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-1.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);


a.addEventListener('click',function(){
   music1.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music1.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);


   })

});



});



/////////////////////////////////////////////33333333333333333333333333333333///////////////////


btnPlay2.addEventListener('click',function(){

    leftCol.innerHTML='';
    music1.pause();
    music0.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music8.pause();
    music2.play();

let musicName=document.getElementById('name2').textContent;



let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-2.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);


a.addEventListener('click',function(){
   music2.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music2.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);


   })

});



});
////////////////////////////////////////////////////////4444444444444444444444444444444444444//////////////////////////////


btnPlay3.addEventListener('click',function(){

    leftCol.innerHTML='';
    music1.pause();
    music2.pause();
    music0.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music8.pause();
    music3.play(); 

let musicName=document.getElementById('name3').textContent;



let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-3.png");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music3.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music3.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);


   })

});



});
///////////////////////////////////////////555555555555555555555555555555//////////////////////////


btnPlay4.addEventListener('click',function(){

    leftCol.innerHTML='';
    music1.pause();
    music2.pause();
    music3.pause();
    music0.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music8.pause();
    music4.play();

let musicName=document.getElementById('name4').textContent;

let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-4.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music4.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music4.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);
   })

});
});
/////////////////////////////////////6666666666666666666666666666666666666//////////////


btnPlay5.addEventListener('click',function(){

    leftCol.innerHTML='';
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music0.pause();
    music6.pause();
    music7.pause();
    music8.pause();
    music5.play();

let musicName=document.getElementById('name5').textContent;

let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music5.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music5.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);
   })

});
});
/////////////////////////////7777777777777777777777777777//////////////////////


btnPlay6.addEventListener('click',function(){
    leftCol.innerHTML='';

    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music0.pause();
    music7.pause();
    music8.pause();
    music6.play();

let musicName=document.getElementById('name6').textContent;

let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-1.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music6.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music6.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);
   })

});
});
////////////////////////////8888888888888888888888888888888888888888888888888888///////////////////


btnPlay7.addEventListener('click',function(){
    leftCol.innerHTML='';

    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music0.pause();
    music8.pause();
    music7.play();

let musicName=document.getElementById('name7').textContent;

let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-2.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music7.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music7.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);
   })

});
});
//////////////////////////////9999999999999999999999999999999////////////////////


btnPlay8.addEventListener('click',function(){
    leftCol.innerHTML='';

    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    music5.pause();
    music6.pause();
    music7.pause();
    music0.pause();
    music8.play();

let musicName=document.getElementById('name8').textContent;

let h1=document.createElement('h1');
h1.textContent=musicName;
leftCol.appendChild(h1);

let img=document.createElement('img');
img.setAttribute('src',"imgs/img-4.jpg");
leftCol.appendChild(img);

let a=document.createElement('a');
leftCol.appendChild(a);

let icon=document.createElement('i');
icon.classList.add('fas','fa-pause');
a.appendChild(icon);

a.addEventListener('click',function(){
   music8.pause();
   leftCol.removeChild(a);
   let a2=document.createElement('a');
   leftCol.appendChild(a2);


   let icon2=document.createElement('i');
   icon2.classList.add('fas','fa-play');
   a2.appendChild(icon2);

   a2.addEventListener('click',function(){
       music8.play();
       leftCol.removeChild(a2);
       leftCol.appendChild(a);
   })

});
});
////////////////////////////////10/////////////////son/////////////

}