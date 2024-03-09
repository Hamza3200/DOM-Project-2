

document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
});