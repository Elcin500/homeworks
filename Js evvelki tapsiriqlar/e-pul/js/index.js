let balance = localStorage.getItem('balance');
const balanceInfo = document.querySelector('#balanceInfo');

if (balance == null) {
    balance = 0;
}

balanceInfo.textContent = `${balance} ₼`;

function getElement(id) {
    return document.querySelector(`#${id}`)
}

const payAzercell = document.querySelector('#payAzercell');
const payBakcell = getElement('payBakcell');
const payAzerfon = getElement('payAzerfon');
const payWallet = getElement('payWallet');

payAzercell.addEventListener('click', function () {

    sessionStorage.setItem('provider', 'Azercell');
    sessionStorage.setItem('providerId', 1);
    window.location.href = 'payment.html';
});

payBakcell.addEventListener('click', function () {

    sessionStorage.setItem('provider', 'Bakcell');
    sessionStorage.setItem('providerId', 2);
    window.location.href = 'payment.html';


});

payAzerfon.addEventListener('click', function () {

    sessionStorage.setItem('provider', 'Azerfon');
    sessionStorage.setItem('providerId', 3);

    window.location.href = 'payment.html';
});

payWallet.addEventListener('click', function () {
    sessionStorage.setItem('provider', 'Elektron Pul kisesi');

    sessionStorage.setItem('providerId', 4);

    window.location.href = 'payment.html';
});