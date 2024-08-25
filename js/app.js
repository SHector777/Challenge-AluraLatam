// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let booleanoDeControl = false;

function encriptarTexto(){

    let textoUsuario = document.getElementById('texto-usuario').value;

    let respuestaValidadcion = validarTexto(textoUsuario);

    let respuestaValidacionTextoVacio = validacionTextoVacio(textoUsuario);

    if(respuestaValidadcion === true && respuestaValidacionTextoVacio === false){

        textoUsuario = encriptacion(textoUsuario);
    
        mostrarResultado(textoUsuario);
    
        document.getElementById('texto-usuario').value = "";

        textoDeAdvertencia();

    }else{

        cargarMensajeDeError();

    };

    return;
};

function validarTexto(texto){

    let caracteresValidos = /^[a-z\s]/;
    let respuesta = true;

    for(let i=0; i<texto.length; i++){

        if(caracteresValidos.test(texto[i]) === false){
            respuesta = false;
            break;
        };
    };

    return respuesta;
};

function validacionTextoVacio(texto){

    let respuesta = false;

    if(texto.trim() === ''){
        respuesta = true;
    };

    return respuesta;
};

function encriptacion(texto){

    let tabla = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<tabla.length; i++){
        
        if(texto.includes(tabla[i][0])){
            texto = texto.replaceAll(tabla[i][0],tabla[i][1]);
        };
    };

    return texto;
};

function desencriptarTexto(){

    let textoUsuario = document.getElementById('texto-usuario').value;

    let respuestaValidadcion = validarTexto(textoUsuario);

    let respuestaValidacionTextoVacio = validacionTextoVacio(textoUsuario);

    if(respuestaValidadcion === true && respuestaValidacionTextoVacio === false){

        textoUsuario = desencriptar(textoUsuario);
    
        mostrarResultado(textoUsuario);

        document.getElementById('texto-usuario').value = "";

        textoDeAdvertencia();

    }else{

        cargarMensajeDeError();

    }

    return;
};

function desencriptar(texto){

    let tabla = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<tabla.length; i++){
        
        if(texto.includes(tabla[i][1])){
            texto = texto.replaceAll(tabla[i][1],tabla[i][0]);
        };
    };

    return texto;
}

function limpiarSeccionResultado(){
    let aux = document.querySelector('.contenedor-main-resultado-previo');
    aux.style.display = "none";
    return;
};

function mostrarResultado(texto){

    limpiarSeccionResultado();
    document.querySelector('.contenedor-main-resultado-final').style.display = "flex";
    let aux = document.querySelector('.texto-final');
    aux.innerHTML = texto;

    return;
};

function cargarMensajeDeError(){

    document.querySelector('.contenedor-main-resultado-final').style.display = "none";
    document.querySelector('.contenedor-main-resultado-previo').style.display = "flex";
    //document.querySelector(".imagen-resultado").src = "./assets/segundaImagenEditada.png";
    document.querySelector('.imagen-resultado').style.display = "none";
    document.querySelector('.imagen-error').style.display = "flex";

    let mediaqueryList = window.matchMedia("(max-width: 768px)");
    if(mediaqueryList.matches === true) {
        document.querySelector('.imagen-error').style.display = "none";
    }

    let subTitulo = document.querySelector('.resultado-subtitulo');
    subTitulo.innerHTML = '¡¡Oh No Hubo un ERROR!!';
    subTitulo.style.color = "#F93005"

    document.querySelector('.resultado-texto').innerHTML = "Texto NO VALIDO, ingrese texto solo en minusculas y sin acentos.";
    document.querySelector('.resultado-texto').style.color = "#fa7a02";

    let elementoHTML = document.getElementById('texto-informativo');
    elementoHTML.innerHTML = 'Apenas letras munúsculas y sin acento.';
    elementoHTML.style.color = "#F93005";
    booleanoDeControl = true;

    return;
};

function textoDeAdvertencia(){

    if(booleanoDeControl === true){

        document.getElementById('texto-informativo').innerHTML ="Solo letras minúsculas y sin acentos.";
        document.getElementById('texto-informativo').style.color = "#495057";
        booleanoDeControl = false;

    };

    return;
};

function botonCopiar(){

    let texto = document.querySelector('.texto-final').textContent;
    
    navigator.clipboard.writeText(texto);

    return;
}