document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', () => {
        let a = document.documentElement.scrollTop;
        let linkVoltarElements = document.getElementById("link-Voltar");
        let containerElement = document.getElementById("container");

        if (a > 0) {
            linkVoltarElements.style.display = "block";
            containerElement.style.display = "flex";
        } else {
            linkVoltarElements.style.display = "none";
            containerElement.style.display = "none";
        }
    });
});