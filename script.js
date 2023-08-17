const panels = document.querySelectorAll('.panels');
const panel = document.querySelectorAll(".panel")

// panel.forEach(el => el.addEventListener('click',el.target.classList.toggle('open')));

panel.forEach((el)=>{el.addEventListener("click",()=>{
    el.classList.toggle("open");
    el.classList.toggle("open-active")
})})