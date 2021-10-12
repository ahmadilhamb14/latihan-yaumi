var y = document.getElementsByClassName("button3");
var x = document.getElementsByClassName("sidebar");

y[0].addEventListener("click", munculkan);

function munculkan() {
    x[0].style = "display: block";
}