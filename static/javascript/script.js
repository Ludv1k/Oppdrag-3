function changeColor() {
    let color = document.getElementById("colorInput").value;
    document.body.style.color = color;
    document.getElementById("colorText").innerHTML = color;
}