document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', () => {
        let a = document.documentElement.scrollTop;
        let linkVoltarElements = document.getElementById("link-Voltar");
        let containerElement = document.getElementById("container");

        if (a > 0) {
            linkVoltarElements.style.display = "block";
            containerElement.style.backgroundColor = "rgb(22, 22, 197)";
        } else {
            linkVoltarElements.style.display = "none";
            containerElement.style.backgroundColor = "white";
        }
    });
});