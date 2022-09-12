// SELETORES
const inputTexto = document.querySelector('.inputTexto');
const mensagem = document.getElementById('mensagem');
const img_espera = document.getElementById('imagem-espera');
const alerta_msg = document.getElementById('alerta-mensagem');

/* 
        A letra "e" é convertida para "enter"
        A letra "i" é convertida para "imes"
        A letra "a" é convertida para "ai"
        A letra "o" é convertida para "ober"
        A letra "u" é convertida para "ufat"
*/

function encriptar(stringEncriptada) {

    let matrizCodigo = [

        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']

    ]

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }

    return stringEncriptada

}

function btnEncriptar() {

    if (inputTexto.value == 0) {
        img_espera.style.display = 'block';
        alerta_msg.style.display = 'block';
    } else {
        img_espera.style.display = 'none';
        alerta_msg.style.display = 'none';
    }

    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

/* 
        A letra "e" é convertida para "enter"
        A letra "i" é convertida para "imes"
        A letra "a" é convertida para "ai"
        A letra "o" é convertida para "ober"
        A letra "u" é convertida para "ufat"
*/

function descriptar(stringDescriptada) {

    let matrizCodigo = [

        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']

    ]

    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }

    return stringDescriptada

}

function btnDescriptar() {

    if (inputTexto.value == 0) {
        img_espera.style.display = 'block';
        alerta_msg.style.display = 'block';
    } else {
        img_espera.style.display = 'none';
        alerta_msg.style.display = 'none';
    }

    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
}

function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = (element.scrollHeight) + 'px';
}

function handleClick() {
    var input = document.getElementById('mensagem').value;
    navigator.clipboard.writeText(input);
}