function encriptar() {
    // Obtener el elemento textarea por su ID
    var miTextArea = document.getElementById("miTextArea");

    // Obtener el texto del textarea
    var texto = miTextArea.value;
    console.log(texto)

    var encriptado = [];
    
    var mostrar = document.getElementById("mostrar");

    for (var i = 0; i < texto.length; i++) {
        encriptado.push(texto.charAt(i));

    }

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

    
    mostrar.textContent = encriptado.join("");

}

function desencriptar() {
    // Obtener el elemento textarea por su ID
    var miTextArea = document.getElementById("miTextArea");

    // Obtener el texto del textarea
    var texto = miTextArea.value;
    console.log(texto)

    var encriptado = [];
    var codigo;
    var mostrar = document.getElementById("mostrar");

    for (var i = 0; i < texto.length; i++) {
        encriptado.push(texto.charAt(i));

    }


    

    for (var i = 0; i < encriptado.length; i++) {
        // console.log(encriptado[i]);
        switch (encriptado[i]) {
            case 'a':
                codigo = encriptado[i] + encriptado[i + 1];
                if (codigo == 'ai') {

                    encriptado[i] = 'a';
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
}

var copy = document.getElementById("copiar");

copy.addEventListener("click", ()=>{
    var mostrar = document.getElementById("mostrar");
    resultado = mostrar.textContent;
    navigator.clipboard.writeText(resultado);
})