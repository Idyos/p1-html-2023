var hamburguer = document.querySelector(".hamburguer");
var navLeft = document.querySelector(".vertical");
var part1 = document.querySelector(".part1");
var part2 = document.querySelector(".part2");
var part4 = document.querySelector(".part4");
var footer = document.querySelector("footer");
var horizontal = document.querySelector(".horizontal");
var apartados = document.querySelector(".apartados");
var isNavOpen = false;
hamburguer.addEventListener("click", function(){
    var hamLines = hamburguer.querySelectorAll("div");
    if(isNavOpen==false){
        hamLines[0].classList.add("top");
        hamLines[1].classList.add("middle");
        hamLines[2].classList.add("bottom");
        navLeft.classList.add("extended");
        apartados.classList.remove("ApartadosHidden");
        part1.classList.add("pextended");
        part2.classList.add("pextended");
        part4.classList.add("pextended");
        footer.classList.add("pextended");
        horizontal.classList.add("pextended");
        isNavOpen=true;
    }else{
        hamLines[0].classList.remove("top");
        hamLines[1].classList.remove("middle");
        hamLines[2].classList.remove("bottom");
        navLeft.classList.remove("extended");
        apartados.classList.add("ApartadosHidden");
        part1.classList.remove("pextended");
        part2.classList.remove("pextended");
        part4.classList.remove("pextended");
        footer.classList.remove("pextended");
        horizontal.classList.remove("pextended");
        isNavOpen=false;
    }


})