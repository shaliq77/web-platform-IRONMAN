/* Iteration 4: Make the Canvas App Functional */
// <!-- Ironman - background, helmet, eyes, face-plate  -->
const imgbackground = document.getElementById("background")
const buttonbackground = document.getElementById("btn-background")

buttonbackground.oninput = () =>{
  imgbackground.style.fill = buttonbackground.value ;
} 

const imghelmet = document.getElementById("helmet")
const buttonhelmet = document.getElementById("btn-helmet")

buttonhelmet.oninput = () =>{
  imghelmet.style.fill = buttonhelmet.value ;
} 


const imgeyes = document.getElementById("eyes")
const buttoneyes = document.getElementById("btn-eyes")

buttoneyes.oninput = () =>{
  imgeyes.style.fill = buttoneyes.value ;
} 


const imgfaceplate = document.getElementById("face-plate")
const buttonfaceplate = document.getElementById("btn-face-plate")

buttonfaceplate.oninput = () =>{
  imgfaceplate.style.fill = buttonfaceplate.value ;
} 
