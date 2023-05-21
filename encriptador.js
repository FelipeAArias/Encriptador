var encriptado = [];
var texto;

function traerDatos() {
    // Traemos el textarea mediante su ID
    var miTextArea = document.getElementById("miTextArea");
    // Traemos el div mediante su ID 
    var mostrar = document.getElementById("mostrar");
    // En una variable se coloca lo escrito en el text area
    texto = miTextArea.value;

    for (var i = 0; i < texto.length; i++) {
        encriptado.push(texto.charAt(i));

    }
    console.log(encriptado)
}


function encriptar() {
    traerDatos();

    for (var i = 0; i < texto.length; i++) {
        switch (encriptado[i]) {
            case 'a':
                encriptado[i] = 'ai';
                console.log(encriptado[i]);
                break;
            case 'e':
                encriptado[i] = 'enter';
                console.log(encriptado[i]);
                break;
            case 'i':
                encriptado[i] = 'imes';
                console.log(encriptado[i]);
                break;

            case 'o':
                encriptado[i] = 'ober';
                console.log(encriptado[i]);
                break;
            case 'u':
                encriptado[i] = 'ufat';
                console.log(encriptado[i]);
                break;
            default:

                break;

        }
    }

    // Mostramos en el div el resultado, Usamos "join" para que los muestre sin las separaciones del array 
    mostrar.textContent = encriptado.join("");
    encriptado = [];
    console.log(encriptado);

}

function desencriptar() {
    traerDatos();

    //variable que usamos para almacenar dentro del bucle
    var codigo;
    for (var i = 0; i < encriptado.length; i++) {

        switch (encriptado[i]) {
            case 'a':

                codigo = encriptado[i] + encriptado[i + 1];
                if (codigo == 'ai') {

                    encriptado[i] = 'a';
                    // saltamos los caracteres concatenados
                    encriptado[i + 1] = '';
                    i = i + 1;
                    console.log(encriptado[i]);
                }
                break;
            case 'e':
                codigo = encriptado[i] + encriptado[i + 1] + encriptado[i + 2] + encriptado[i + 3] + encriptado[i + 4];
                if (codigo == 'enter') {
                    encriptado[i] = 'e';
                    encriptado[i + 1] = '';
                    encriptado[i + 2] = '';
                    encriptado[i + 3] = '';
                    encriptado[i + 4] = '';
                    i = i + 4;
                    console.log(encriptado[i]);
                }
                break;
            case 'i':
                codigo = encriptado[i] + encriptado[i + 1] + encriptado[i + 2] + encriptado[i + 3];
                if (codigo == 'imes') {
                    encriptado[i] = 'i';
                    encriptado[i + 1] = '';
                    encriptado[i + 2] = '';
                    encriptado[i + 3] = '';
                    i = i + 3;
                    console.log(encriptado[i]);
                }
                break;

            case 'o':
                codigo = encriptado[i] + encriptado[i + 1] + encriptado[i + 2] + encriptado[i + 3];
                if (codigo == 'ober') {
                    encriptado[i] = 'o';
                    encriptado[i + 1] = '';
                    encriptado[i + 2] = '';
                    encriptado[i + 3] = '';
                    i = i + 3;
                    console.log(encriptado[i]);
                }
                break;
            case 'u':
                codigo = encriptado[i] + encriptado[i + 1] + encriptado[i + 2] + encriptado[i + 3];
                if (codigo == 'ufat') {
                    encriptado[i] = 'u';
                    encriptado[i + 1] = '';
                    encriptado[i + 2] = '';
                    encriptado[i + 3] = '';
                    i = i + 3;
                    console.log(encriptado[i]);
                }
                break;
            default:

                break;

        }
    }
    mostrar.textContent = encriptado.join("");
    encriptado = [];
}

function copiar() {

    var mostrar = document.getElementById("mostrar"); //almacenamos el div completo

    navigator.clipboard.writeText(mostrar.textContent); //copiamos solo el contenido del div, seria el texto
    document.getElementById("miTextArea").value = "";  // borramos el otro textarea para poder pegar lo que copiamos
}