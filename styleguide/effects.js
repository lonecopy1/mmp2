/* Denne javascript fil er skrevet af Lone */

var i;
var circles = document.getElementsByClassName("circle");

for (i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = circles[i].innerHTML
    
    
    /* Nogle elementer er for lyse og skal have en grå kant */
    if (circles[i].innerHTML == '#ffffff'
        || circles[i].innerHTML == '#f6f6f6'
        || circles[i].innerHTML == '#f4f5f5f5') {
        circles[i].style.border = "1px solid #999999";
    }
}
