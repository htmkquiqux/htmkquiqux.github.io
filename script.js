document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#surpriseButton");
    const message = document.querySelector("#hiddenMessage");
    const popup = document.querySelector("#popup");

    button.addEventListener("click", function () {
        message.style.display = "block";
        popup.style.display = "block";
    });
});
