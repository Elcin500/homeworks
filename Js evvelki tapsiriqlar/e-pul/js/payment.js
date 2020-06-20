// 'use strict';

let provider = sessionStorage.getItem('provider');

if (provider == null) {
    window.location.href = 'index.html';
}


const providerInfo = document.querySelector('#providerInfo');

providerInfo.textContent = provider;

// console.log(providerInfo);

const btnPay = document.querySelector('#btnPay');
let pid = sessionStorage.getItem('providerId');
// let remove=document.getElementsByClassName('remove');

// if (pid != 4) {
//     document.querySelector('#txtCardNo').parentElement.style.display = 'none';
//     document.querySelector('#txtMonth').parentElement.style.display = 'none';
//     document.querySelector('#txtYear').parentElement.style.display = 'none';
//     document.querySelector('#txtSecretNo').parentElement.style.display = 'none';
// }
// else {
//     document.querySelector('#txtNumber').parentElement.style.display = 'none';

// }
let form=document.getElementById('formId');
let cardnumber= document.querySelector('#txtCardNo').parentElement;
let month=  document.querySelector('#txtMonth').parentElement;
let year=   document.querySelector('#txtYear').parentElement;
let secretno= document.querySelector('#txtSecretNo').parentElement;
let number1=  document.querySelector('#txtNumber').parentElement;
let amount=document.querySelector('#txtAmount').parentElement;


    if (pid != 4) {
        cardnumber.parentElement.removeChild(cardnumber);
        month.parentElement.removeChild(month);
        year.parentElement.removeChild(year);
        secretno.parentElement.removeChild(secretno);
    }
    else {
        number1.parentElement.removeChild(number1);
    }

  



btnPay.addEventListener('click', function () {
 
    const txtNumber = number1.lastElementChild;
    const txtAmount = amount.lastElementChild;
    const txtCardNo = cardnumber.lastElementChild;
    const txtMonth = month.lastElementChild;
    const txtYear =year.lastElementChild;
    const txtSecretNo = secretno.lastElementChild;

    //txtNumber.value
let payment;
    
if(form.children[0]!=number1){
     payment = {
        number: txtNumber.value,
        amount: txtAmount.value,
        cardNo: txtCardNo.value,
        month: txtMonth.value,
        year: txtYear.value,
        secretNo: txtSecretNo.value,
        providerId: pid
    };
  
//    if (payment.cardNo.lenght!=16){
//     alert('Kart nomresi dzgun deil');
//     return;
//    }
///////// Burda qalmisam yazammmadim cunki payment.cardNo.lenght- undufined verir///////////////////////////////////////




    


if (payment.year==''){
    alert('Ili daxil edin');
 return;
     }
     if(payment.month==''){
         alert('Ayi daxil edin');
         return;
     }
     if(payment.year<2020){
             alert('Kartinizin vaxti bitib')
             return;
 
     }
     else if(payment.year==2020 && payment.month<=5){
         alert('Kartinizin vaxti bitib')
         return;
     }
    
}

else{
   payment = {
        number: txtNumber.value,
        amount: txtAmount.value,
        //cardNo: txtCardNo.value,
        //month: txtMonth.value,
        //year: txtYear.value,
        //secretNo: txtSecretNo.value,
        providerId: pid

        
    };
    
  


    if( payment.number == ''){
        alert('Nomre daxil edin');
       return;
    }
    



}
    //Payment
  
   
// console.log(payment);   

    let balance = localStorage.getItem('balance');

    
   
   
    




if(payment.amount=='') {
    alert('Məbləğ daxil edin');
    balance = 0;
    return;
}   


if(payment.amount<=0) {
    alert('Məbləğ düzgün daxil edilməyib');
    balance = 0;
    return;

}   

    if (balance == null) {
        balance = 0;
    }
   

    
  
   
    if (pid == 4) {
        balance = parseInt(balance) + parseInt(payment.amount);
    }
    else {
        

        if  (parseInt(balance) < parseInt(payment.amount)) {
            alert('Balansiniz kifayet deyil!');
            return;
        }

      
        balance = parseInt(balance) - parseInt(payment.amount);
    }

    
    

    localStorage.setItem('balance', balance);


    window.location.href = 'index.html';
    

});
// eger dogru nomre yazilmayibsa mesaj versin

// misal ucun nomreler
// xxx-xxx-xx-xx

// eger bu uzunluqdan ferqlidirse nomre dogruvyazilmayib

// eger azercelle gelibse

// 050/051 le bashlamirsa
// sehv prefix daxil edilib yazsin

// eyni zamanda bakcell ve azerfona da aiddir

// menfi balans ve ya 0 daxil ede bilmesin istifadeci

// ay ve il secimi bu tarixe aid aydirsa ve ya bu tarixden kecmish tarixe aid aydirsa kartin muddeti bitib mesaji cixarsin

// ve bu mesajlar verilerse
// emeliyyat davam elemesin
