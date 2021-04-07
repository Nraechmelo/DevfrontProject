var btnPopup = document.getElementById('btnPopup');
var btnClose = document.getElementById('btnClose');
var overlay = document.getElementById('overlay');
var trigger = document.getElementById('trigger');
let alreadyseen = false;

trigger.addEventListener('mouseenter',openMoadl);
btnClose.addEventListener('click',closeModal);
function openMoadl() {
    if (alreadyseen==false) {
    overlay.style.display='block';
    alreadyseen = true;
    }
}
function closeModal() {
    overlay.style.display='none';
}
function checkPopup(){
    if (alreadyseen==false) {
        overlay.style.display='block';
        alreadyseen = true;
        }
}
window.setTimeout(checkPopup,10000);