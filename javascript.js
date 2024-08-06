function criptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    let textoCriptografado = texto.replace(/e/g, "enter")
    .replace(/E/g, "Enter")
    .replace(/é/g, "énter")
    .replace(/É/g, "Énter")
    .replace(/ê/g, "ênter")
    .replace(/Ê/g, "Ênter")
    .replace(/i/g, "imes")
    .replace(/I/g, "Imes")
    .replace(/í/g, "ímes")
    .replace(/Í/g, "Ímes")
    .replace(/î/g, "îmes")
    .replace(/Î/g, "Îmes")
    .replace(/a/g, "ai")
    .replace(/A/g, "Ai")
    .replace(/á/g, "ái")
    .replace(/Á/g, "Ái")
    .replace(/â/g, "âi")
    .replace(/Â/g, "Âi")
    .replace(/ã/g, "ãi")
    .replace(/Ã/g, "Ãi")
    .replace(/o/g, "ober")
    .replace(/O/g, "Ober")
    .replace(/ó/g, "óber")
    .replace(/Ó/g, "Óber")
    .replace(/ô/g, "ôber")
    .replace(/Ô/g, "Ôber")
    .replace(/õ/g, "õber")
    .replace(/Õ/g, "Õber")
    .replace(/u/g, "ufat")
    .replace(/U/g, "Ufat")
    .replace(/ú/g, "úfat")
    .replace(/Ú/g, "Úfat")
    .replace(/û/g, "ûfat")
    .replace(/Û/g, "Ûfat");
    document.getElementById("TextoSaida").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("TextoEntrada").value;
    let textoDescriptografado = texto.replace(/enter/g, "e")
    .replace(/Enter/g, "E")
    .replace(/énter/g, "é")
    .replace(/Énter/g, "É")
    .replace(/ênter/g, "ê")
    .replace(/Ênter/g, "Ê")
    .replace(/imes/g, "i")
    .replace(/Imes/g, "I")
    .replace(/ímes/g, "í")
    .replace(/Ímes/g, "Í")
    .replace(/îmes/g, "î")
    .replace(/Îmes/g, "Î")
    .replace(/ai/g, "a")
    .replace(/Ai/g, "A")
    .replace(/ái/g, "á")
    .replace(/Ái/g, "Á")
    .replace(/âi/g, "â")
    .replace(/Âi/g, "Â")
    .replace(/ãi/g, "ã")
    .replace(/Ãi/g, "Ã")
    .replace(/ober/g, "o")
    .replace(/Ober/g, "O")
    .replace(/óber/g, "ó")
    .replace(/Óber/g, "Ó")
    .replace(/ôber/g, "ô")
    .replace(/Ôber/g, "Ô")
    .replace(/õber/g, "õ")
    .replace(/Õber/g, "Õ")
    .replace(/ufat/g, "u")
    .replace(/Ufat/g, "U")
    .replace(/úfat/g, "ú")
    .replace(/Úfat/g, "Ú")
    .replace(/ûfat/g, "û")
    .replace(/Ûfat/g, "Û");
    document.getElementById("TextoSaida").value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("TextoSaida");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
