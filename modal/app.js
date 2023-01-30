let body = document.querySelector('body')
let modal = document.querySelector('.pop-up')
let button = document.querySelector('#open')
let cancel = document.querySelector('#close')
let container = document.querySelector('.container')

button.addEventListener('click', ()=>{
    container.style.display = 'block';
    modal.style.display = 'block';

});

cancel.addEventListener('click', ()=>{
    container.style.display = 'none';
    modal.style.display = 'none';
});