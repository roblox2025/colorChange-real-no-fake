var texto = document.getElementById("mitexto");
var button = document.getElementById("miboton");
var texto2 = document.getElementById("mitexto2")
var micolorfondopipipi = document.getElementById("micolorfondopipipi")
var micolor = document.getElementById("micolor")

function generarAlerta(){
    alert(texto.value + texto2.value);
    micolorfondopipipi.style.backgroundColor = micolor.value

}

button.addEventListener("click", generarAlerta);

