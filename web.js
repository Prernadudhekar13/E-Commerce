// i have a bar and as i click it i want the other side to be open
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar-links');
if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })
}