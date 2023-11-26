let slidePosicao = 1;
mostrarImagens(slidePosicao);

function proximaImagem(n) {
    mostrarImagens(slidePosicao += n);
}

function mostrarImagens(n) {
    let i;
    let slides = document.getElementsByClassName("slide1");

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