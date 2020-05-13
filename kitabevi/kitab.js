{/* <ol>
<li>
</li>
<hr>
</ol> */}
function objectf(bookname,amount,author){
    this.bookname=bookname;
    this.amount=amount;
    this.author=author;
    
    this.fullbook=function(){
        return `${this.bookname} ${this.amount} ${this.author}`
        
    }
    
    };
    
    // let books=[];
    
    
    function met(id1){
        return document.getElementById(id1);
    }
    
    function metv(id2){
        return document.getElementById(id2).value;
    }
    
    
    let btnRemove=met('btnRemove');
    let btnAdd=met('btnAdd');
    
    btnAdd.addEventListener('click',function(){
    let bookname =metv('bookname');
    let amount=metv('amount');
    let author=metv('author');
    
    let newBook = new objectf(bookname,amount,author);
    
    // books.push(newBook);
    // create(books);
    
    create(newBook);
    
    });
    
    let list=met('listol');
    
    function create(newBook){
      
        // list.innerHTML='';
    
        // books.forEach(function(newBook,index) {
        //     let newBook2=document.createElement('li');
    
        //     let hr=document.createElement('hr');
    
        //     newBook2.textContent=newBook.fullbook();       
        //        //////////arraydan cixartdim cunki hamisni sil dumesini 
        //      ////viranda arrayin icindekileri silmirdi
        //                                                      //sil funksiyasina arryayin ici bosluq yazdim yoxladim 
        //                                                      //onda da tezden elave et duymesini viranda islemirdi..
    
        //     newBook2.setAttribute('data',index);
    
        //     list.appendChild(newBook2);
        //     list.appendChild(hr);
        // });
    
    
        let newBook2=document.createElement('li');

    
        let hr=document.createElement('hr');

        // <i class="fas fa-minus-circle"></i>
    

        let link=document.createElement('a');
        link.classList.add('btn');
        link.style.position='absolute';
        link.style.right='20px';
        link.style.color='red';
        link.style.fontSize='20px';

        let icon=document.createElement('i');
        icon.classList.add('fas','fa-minus-circle');

        newBook2.textContent=newBook.fullbook();
    
        list.appendChild(newBook2);
        list.appendChild(hr);

        newBook2.appendChild(link);

        link.appendChild(icon);

        link.addEventListener('click',function(){
            list.removeChild(newBook2);
            hr.parentElement.removeChild(hr);
        });
     
    
    };

    
    btnRemove.addEventListener('click',function(){
        list.innerHTML='';
        
    });
