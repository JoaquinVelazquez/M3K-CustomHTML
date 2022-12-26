dropdown = document.querySelector(".dropdown");
categoriasPrincipales = document.querySelectorAll(".cat-principal");
categoriasSecundarias = document.querySelectorAll(".cat-secundaria");

categoriasPrincipales[0].addEventListener("mouseenter", function(){
    categoriasSecundarias[0].classList.remove("invisible");
    categoriasSecundarias[1].classList.add("invisible");
    categoriasSecundarias[2].classList.add("invisible");
    categoriasSecundarias[3].classList.add("invisible");
    categoriasSecundarias[4].classList.add("invisible");
});

categoriasPrincipales[1].addEventListener("mouseenter", function(){
    categoriasSecundarias[0].classList.add("invisible");
    categoriasSecundarias[1].classList.remove("invisible");
    categoriasSecundarias[2].classList.add("invisible");
    categoriasSecundarias[3].classList.add("invisible");
    categoriasSecundarias[4].classList.add("invisible");
});

categoriasPrincipales[2].addEventListener("mouseenter", function(){
    categoriasSecundarias[0].classList.add("invisible");
    categoriasSecundarias[1].classList.add("invisible");
    categoriasSecundarias[2].classList.remove("invisible");
    categoriasSecundarias[3].classList.add("invisible");
    categoriasSecundarias[4].classList.add("invisible");
});

categoriasPrincipales[3].addEventListener("mouseenter", function(){
    categoriasSecundarias[0].classList.add("invisible");
    categoriasSecundarias[1].classList.add("invisible");
    categoriasSecundarias[2].classList.add("invisible");
    categoriasSecundarias[3].classList.remove("invisible");
    categoriasSecundarias[4].classList.add("invisible");
});

categoriasPrincipales[4].addEventListener("mouseenter", function(){
    categoriasSecundarias[0].classList.add("invisible");
    categoriasSecundarias[1].classList.add("invisible");
    categoriasSecundarias[2].classList.add("invisible");
    categoriasSecundarias[3].classList.add("invisible");
    categoriasSecundarias[4].classList.remove("invisible");
});

dropdown.addEventListener("mouseleave", function(){
    categoriasSecundarias.forEach(element => {
        element.classList.add("invisible");
    });
})