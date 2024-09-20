let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonDos = document.getElementById("borrar");
let mensajeValidacion =document.getElementById("mensajeValidacion");

const cadenaCaracteres =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado =  parseInt(cantidad.value);
    if(numeroDigitado < 8){
        alert("La cantidad de carácteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password+= caracterAleatorio;
        
    }
    contrasena.value = password;
    validar();
    
}

function borrar(){
    contrasena.value = "";
    //cantidad.value = "";
    mensajeValidacion.textContent = "";
}

function validar() {
    let password = contrasena.value;
    let mayuscula = false;
    let minuscula = false;
    let numero = false;
    let especial = false;

    // Validamos cada tipo de caracter
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (caracter >= 'A' && caracter <= 'Z') {
            mayuscula = true;
        } else if (caracter >= 'a' && caracter <= 'z') {
            minuscula = true;
        } else if (caracter >= '0' && caracter <= '9') {
            numero = true;
        } else if ('!@#$%^&*()'.includes(caracter)) {
            especial = true;
        }
    }

    // Contamos la cantidad de diferentes tipos de caracteres
    let tiposDeCaracteres = 0;
    if (mayuscula) tiposDeCaracteres++;
    if (minuscula) tiposDeCaracteres++;
    if (numero) tiposDeCaracteres++;
    if (especial) tiposDeCaracteres++;

    // Mostramos el mensaje de validación
    if (tiposDeCaracteres >= 3) {
        mensajeValidacion.textContent = "La contraseña es fuerte";
        mensajeValidacion.style.color = "green";
    } else {
        mensajeValidacion.textContent = "La contraseña es débil. Genera una nueva contraseña";
        mensajeValidacion.style.color = "red";
    }
}

boton.addEventListener("click", function() {
    generar();
    validar(); 
});















