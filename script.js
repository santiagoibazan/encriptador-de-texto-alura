var input;
var i;
var texto;
var textoEncriptado;
var textoDesencriptado;
var x;
var salida = document.createElement("p");
var buttonEncriptar = document.getElementById("encriptar");
var buttonDesencriptar = document.getElementById("desencriptar");
var botonCopiar = document.createElement("button");
botonCopiar.innerHTML = "Copiar";
botonCopiar.id = "botonCopiar";
salida.id = "textoResultado"
var areaResultado = document.getElementById("area-resultado");

function getVal(){
    return document.getElementById("texto").value;
}

function encriptarTexto(){
    x = true;
    texto = getVal();
    textoEncriptado = "";
    for (i = 0; i < texto.length; i++) {
        textoEncriptado = textoEncriptado + encriptarLetra(texto[i]);
    }
    salida.innerText = textoEncriptado;
    if (texto === "") {
        ocultar(false);
    } else {
        ocultar(true)
    }
    areaResultado.appendChild(salida);
    areaResultado.appendChild(botonCopiar);
}

function desencriptarTexto(){
    x = false;
    texto = getVal();
    textoDesencriptado = "";
    for (i = 0; i < texto.length; i++) {
        textoDesencriptado = textoDesencriptado + encriptarLetra(texto[i]);
    }
    salida.innerText = textoDesencriptado;
    if (texto === "") {
        ocultar(false);
    } else {
        ocultar(true)
    }
    areaResultado.appendChild(salida);
    areaResultado.appendChild(botonCopiar);
}

function encriptarLetra(letra) {
	switch (letra) {
		case "a":
            if (x == true) {
                return "ai";
			    break;
            } else {
                if (texto[i + 1] == "i") {
                    i = i + 1
                    return "a";
                    break;
                } else {
                    return "a";
                    break;
                }
            }
			
		case "e":
            if (x == true) {
                return "enter";
			    break;
            } else {
                if (texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
                    i = i + 4
                    return "e";
			        break;
                } else {
                    return "e";
			        break;
                }
            }
					
		case "i":
            if (x == true) {
                return "imes";
			    break;
            } else {
                if (texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
                    i = i + 3
                    return "i";
                    break;
                } else {
                    return "i";
                    break;
                }
            }
					
		case "o":
            if (x == true) {
                return "ober";
			    break;
            } else {
                if (texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
                    i = i + 3
                    return "o";
                    break;
                } else {
                    return "o";
                    break;
                }
            }
					
		case "u":
            if (x == true) {
                return "ufat";
			    break;
            } else {
                if (texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
                    i = i + 3
                    return "u";
                    break;
                } else {
                    return "u";
                    break;
                }
            }
		default:
			return letra;
	};
};

function copiarTexto(){
    if (x) {
        navigator.clipboard.writeText(textoEncriptado);
    } else {
        navigator.clipboard.writeText(textoDesencriptado);
    };
};

function ocultar(o){
    var noAccion = document.getElementById("noAccion");
    if (o) {
        noAccion.style.display = "none"
        botonCopiar.style.display = "block";
        salida.style.display = "block"
        
    } else {
        noAccion.style.display = "block";
        botonCopiar.style.display = "none";
        salida.style.display = "none"
    };
};

buttonEncriptar.onclick = encriptarTexto;
buttonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarTexto;