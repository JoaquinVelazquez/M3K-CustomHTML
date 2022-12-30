flecha = document.querySelectorAll(".category-arrow-container .flecha-desplegable");
subcategorias = document.querySelectorAll(".subcategorias");

let favicon = document.querySelector("link[rel='shortcut icon']")
favicon.href = 'https://iili.io/Hu2lrxV.png';

flecha[0].addEventListener("click", function () {
  flecha[0].classList.toggle("rotate");
  subcategorias[0].classList.toggle("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[1].addEventListener("click", function () {
  flecha[1].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.toggle("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[2].addEventListener("click", function () {
  flecha[2].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.toggle("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[3].addEventListener("click", function () {
  flecha[3].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.toggle("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[4].addEventListener("click", function () {
  flecha[4].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.toggle("invisible");
});
