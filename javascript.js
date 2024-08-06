function criptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    document.getElementById("TextoSaida").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    let textoDescriptografado = texto.replace(/enter/g, "e")
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
