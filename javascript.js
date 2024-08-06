// Função para remover acentos e converter para minúsculas
function normalizarTexto(texto) {
    return texto
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase(); 
}

function criptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    texto = normalizarTexto(texto);
    
    if (/^\d+$/.test(texto)) {
        alert("Por favor, insira uma mensagem contendo letras e não apenas números!");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("TextoSaida").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    texto = normalizarTexto(texto);
    
    if (/^\d+$/.test(texto)) {
        alert("Por favor, insira uma mensagem contendo letras e não apenas números.");
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("TextoSaida").value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("TextoSaida");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}