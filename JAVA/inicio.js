const carrusel =document.querySelector("carrusel-items");

let intervalo = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let step = 1;
const start = () => {
    intervalo = setInterval(function (){
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if(carrusel.scrollLeft == maxScrollLeft) {

        }
    }, 10);
};
const stop =() => {}; 

start();
