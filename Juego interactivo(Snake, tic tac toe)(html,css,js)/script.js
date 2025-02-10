const contBtns = document.querySelectorAll(".container-btns button");
const reset = document.querySelector(".reset")
const resultado = document.querySelector(".resultado")
let contador = 0

const matrizbtns = [
    [contBtns[0],contBtns[1],contBtns[2]],
    [contBtns[3],contBtns[4],contBtns[5]],
    [contBtns[6],contBtns[7],contBtns[8]]
]


const validation = ()=>{
    for(let i=0; i<matrizbtns.length; i++){
        let color1 = window.getComputedStyle(matrizbtns[i][0]).backgroundColor;
        let color2 = window.getComputedStyle(matrizbtns[i][1]).backgroundColor;
        let color3 = window.getComputedStyle(matrizbtns[i][2]).backgroundColor;
        
        let color6 = window.getComputedStyle(matrizbtns[0][i]).backgroundColor;
        let color7 = window.getComputedStyle(matrizbtns[1][i]).backgroundColor;
        let color8 = window.getComputedStyle(matrizbtns[2][i]).backgroundColor;

        if((color6 === "rgb(255, 0, 0)" && color7 === "rgb(255, 0, 0)" && color8 === "rgb(255, 0, 0)") || (color1 === "rgb(255, 0, 0)" && color2 === "rgb(255, 0, 0)" && color3 === "rgb(255, 0, 0)")){
            resultado.style.display = "flex";
            let text = resultado.children
            resultado.style.background="#ff7171"
            text[0].innerHTML = "GANO EL COLOR ROJO";
            contador = -1

        }else if((color6 === "rgb(0, 0, 255)" && color7 === "rgb(0, 0, 255)" && color8 === "rgb(0, 0, 255)") || (color1 === "rgb(0, 0, 255)" && color2 === "rgb(0, 0, 255)" && color3 === "rgb(0, 0, 255)")){
            resultado.style.display = "flex";
            let text = resultado.children
            resultado.style.background="#3e3efd"
            text[0].innerHTML = "GANO EL COLOR AZUL";
            contador = -1
        }  
    }
}


const raro = (element) => {
    console.log(element.dataset.clicked)
    if (!element.dataset.clicked){
        if (contador == 0){
            element.style.background="red";
            contador = 1
        } else if (contador == 1){
            element.style.background="blue";
            contador = 0
        }
        element.dataset.clicked = "true";
        
        validation()
    }
}


contBtns.forEach(button => {
    button.addEventListener("click", function(){raro(this)}); 
});

reset.addEventListener("click",()=>{
    contBtns.forEach(element =>{
        element.dataset.clicked = "";
        element.style.background = ""
        contador = 0
        resultado.style.display = "none"
    })
})

resultado.addEventListener("click",()=>{
    resultado.style.display = "none"
})