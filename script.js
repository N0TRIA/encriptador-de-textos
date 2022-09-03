const inputTexto = document.querySelector('.inputTexto');
const mensagem = document.querySelector('.mensagem');

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

    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
}