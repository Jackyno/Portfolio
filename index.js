document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("header h1");
    h1.addEventListener("mouseover", function () {
        h1.style.color = "#FFD700";
    });
    h1.addEventListener("mouseout", function () {
        h1.style.color = "white";
    });
});