const txtyear = document.getElementById('current-year');
txtyear.textContent = new Date().getFullYear();
const nav = document.getElementById('nav');
function hideNav(){
    if(nav.style.display == "block")
    {
        nav.style.display = "none";
    }
    else
    {
        nav.style.display = "block";
    }
}