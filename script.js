let input = document.querySelector(".texto_input");
let container_criptografado = document.querySelector('.container_criptografado');
let matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

document.querySelector(".botao_criptografar").addEventListener("click", criptografar);
document.querySelector(".botao_descriptografar").addEventListener("click", descriptografar);


function criptografar() {
    let text = input.value.toLowerCase();
    console.log(text);
    input.value = null;

    removerElementos(container_criptografado);
    criptografia(text);
}

function removerElementos(container_criptografado) {

    if (container_criptografado.hasChildNodes) {

        if (container_criptografado.firstElementChild === document.querySelector('.not_found')) {

            while (container_criptografado.firstChild) {
                container_criptografado.removeChild(container_criptografado.firstChild);
            }  

        }

    }
}

function adicionarElemento(container_criptografado, text) {
    container_criptografado.innerHTML = `
    <span class = 'teste'>${text}</span>
    `;
}

function criptografia(textoParaCriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaCriptografar.includes(matrizCriptografia[i][0])) {
            textoParaCriptografar = textoParaCriptografar.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1])
        }
    }

    adicionarElemento(container_criptografado, textoParaCriptografar);
}

function descriptografar(){
    console.log('funcionou');
    let text = input.value.toLowerCase();
    console.log(text);
    input.value = null;

    descriptografia(text);
}



function descriptografia(textoParaDescriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaDescriptografar.includes(matrizCriptografia[i][1])) {
            textoParaDescriptografar = textoParaDescriptografar.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0])
        }
    }

    adicionarElemento(container_criptografado, textoParaDescriptografar);
}