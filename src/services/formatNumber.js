export function formatNumber(numero) {
    let partes = numero.toString().split(".");
    let parteEntera = partes[0];
    let parteDecimal = partes.length > 1 ? partes[1] : "";

    parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    let numeroFormateado = "$ " + parteEntera;
    if (parteDecimal !== "") {
        numeroFormateado += "," + parteDecimal;
    }

    return numeroFormateado;
}