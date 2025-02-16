//HEADER
//Función para mostrar el nav de las barras
let btnBars = document.querySelector(".bars");
let nav = document.querySelector(".header-containerNav")
btnBars.addEventListener("click",()=>{
    nav.classList.toggle("on")
})
//MAIN
//ARRAY CON LAS CARDS
document.addEventListener("DOMContentLoaded", async()=>{
  try{
    let response = await fetch("./Cards.json");
    let cards = await response.json()
    generateCards(0,5, cards)
  }catch(error){
    alert("algo salio mal")
  }
})


//validación de número de cards
let sections = document.querySelectorAll(".first-section")
for(let i=1;i<sections.length;i++){
    sections[i].style.display="none";
}
//Función modo active número del nav
let navBtnContainer = document.querySelector(".container-nav-btns")
let navBtns = navBtnContainer.getElementsByClassName("navegation-btn");
for(let i = 0; i<navBtns.length;i++){
    navBtns[i].addEventListener("click",()=>{
        let active=document.getElementsByClassName("active");
        if(active.length>0){
            active[0].className = active[0].className.replace(" active","");
        }
        navBtns[i].classList.toggle("active")
        let string = navBtns[i].textContent;
        let number = parseInt(string, 10);
        changePage(number)
        topBack()
    });
}
//Función top back
function topBack(){
    window.scroll(0,0)
}
//Función para editar cards
//importamos las cards y creamos el contenedor de las cards que se generen
let codeHtml=document.querySelector(".container-section-cards");
let newHtml=document.createElement("section")
newHtml.classList.add("first-section");
codeHtml.appendChild(newHtml)
function generateCards(startIndex, endIndex, cards){
  codeHtml.innerHTML="";
  endIndex = Math.min(endIndex, cards.length);
  for(let i=startIndex; i<endIndex;i++){
    //validar si hay más de 5 cards
    if (i>= startIndex + 5) {
       break;
      }
    let newHtml=document.createElement("div")
    newHtml.classList.add("card");
    newHtml.innerHTML=`
      <div class="container-web">
          <a class="url" target="_blank" href=${cards[i].url}>
            <img class="web"  src="./assets/imagenes/${i}_screenshot.png" alt="">
          </a>
        <div class="container-lenguajes">
          <i class="fa-brands fa-html5" style="color: #e44c25;"></i>
          <i class="fa-brands fa-css3-alt" style="color: #006bc0;"></i>
          <i class="fa-brands fa-square-js" style="color: #f7e018;"></i>
        </div>
      </div>
      <div class="container-text">
        <h2 class="title">${cards[i].titulo}</h2>
        <p class="description">${cards[i].descripcion}</p>
      </div>
    `;
   codeHtml.appendChild(newHtml);
  }
}
//Función cambiar contenido
function changePage(numberPage){
  let startIndex = (numberPage - 1) * 5;
  let endIndex = startIndex + 5;
  generateCards(startIndex, endIndex);
}

