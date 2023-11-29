let slidePosicao = 1;
primeiraImagem(slidePosicao);

function proximaImagem(n, p) {
    mostrarImagens(slidePosicao += n, p);
}


function primeiraImagem() {
    let slides = document.getElementsByClassName("slide1");
    let slides2 = document.getElementsByClassName("slide2");
    let slides3 = document.getElementsByClassName("slide3");
    let slides4 = document.getElementsByClassName("slide4");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosicao - 1].style.display = "block";

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slidePosicao - 1].style.display = "block";

    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slides3[slidePosicao - 1].style.display = "block";

    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    slides4[slidePosicao - 1].style.display = "block";
}



function mostrarImagens(n, p) {
    let i;
    let slides = document.getElementsByClassName("slide1");
    if (p === 1) {
        slides = document.getElementsByClassName("slide2");
    } else if (p === 2) {
        slides = document.getElementsByClassName("slide3");
    }else {
        slides = document.getElementsByClassName("slide4");
    }


    if (n > slides.length) {
        slidePosicao = 1
    }
    if (n < 1) {
        slidePosicao = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosicao - 1].style.display = "block";

}