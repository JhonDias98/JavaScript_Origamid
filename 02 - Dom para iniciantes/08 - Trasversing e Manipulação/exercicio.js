// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq').querySelector('dt');


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;


// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
const faq = document.querySelector('dt');

faq.innerHTML = animais.innerHTML;