let button = document.querySelector(".button")
let body = document.querySelector('body')
let moonIcon = document.querySelector('.button .moon')
let heading = document.querySelector('.heading')
button.addEventListener('click', darkMood);
function darkMood()
{
    body.classList.toggle("darkmood");
    // if condition
   let isDarkMood = body.classList.contains("darkmood") 
   if(isDarkMood){
    moonIcon.style.marginTop = '-100%'
    heading.innerText = 'Dark Mood'
   }
   else{
    moonIcon.style.marginTop = 0
    heading.innerText = 'Light Mood'
   }
}