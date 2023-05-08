function encriptar() {
    let mensaje = document.getElementById("texto").value.toLowerCase();
    let letras = ['e','i','a','o','u'];
    let remplazo = ['enter','imes','ai','ober','ufat'];
    for (let x = 0; x < letras.length; x++) {
            mensaje = mensaje.replace(new RegExp(letras[x],'gim'), remplazo[x]);
    }
    document.getElementById("muneco").style.display = "none";
    document.getElementById("parrafo1").style.display = "none";
    document.getElementById("parrafo2").style.display = "none";
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "flex";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "flex";
    
}
function desencriptar() {
    let mensaje = document.getElementById("texto").value.toLowerCase();
    let letras = ['e','i','a','o','u'];
    let remplazo = ['enter','imes','ai','ober','ufat'];
    for (let x = 0; x < remplazo.length; x++) {
            mensaje = mensaje.replace(new RegExp(remplazo[x],'gim'), letras[x]);
    }
    document.getElementById("muneco").style.display = "none";
    document.getElementById("parrafo1").style.display = "none";
    document.getElementById("parrafo2").style.display = "none";
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "flex";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "flex";
    
}
function copiar() {
    let copiartexto = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(copiartexto);
}