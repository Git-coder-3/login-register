const btnpopup = document.querySelector('.btnLoginpopup');
const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}
function deactivateCoverBox(){
    cover_box.classList.remove('active');
}
function activatepopup(){
    cover_box.classList.add('activepopup');
}
function deactivateCoverPopup(){
    cover_box.classList.remove('activepopup');
}

registerLink.addEventListener('click',activateCoverBox);
loginLink.addEventListener('click',deactivateCoverBox);
btnpopup.addEventListener('click',activatepopup);
iconClose.addEventListener('click',deactivateCoverPopup);





