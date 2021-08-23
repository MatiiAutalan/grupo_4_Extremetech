const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderSection");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnIzq = document.querySelector("#btnIzq");
const btnDer = document.querySelector("#btnDer");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function siguiente() {
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition  = "all 0.5s ease";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function anterior() {
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition  = "all 0.5s ease";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnDer.addEventListener('click', function () {
    siguiente();
});

btnIzq.addEventListener('click', function () {
    anterior();
});

setInterval(() => {
    siguiente();
}, 4000);