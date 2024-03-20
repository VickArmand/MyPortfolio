const txtyear = document.getElementById('current-year');
txtyear.textContent = new Date().getFullYear();
const nav = document.getElementById('nav');
function hideNav(){
    nav.classList.toggle("active");
}