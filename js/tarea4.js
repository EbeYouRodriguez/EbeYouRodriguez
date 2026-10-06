alert("Practicando JS");

function cambiarmoneda() {
    let dolares = prompt("Ingrese la cantidad en dólares: ");
    let tasa = prompt("Ingrese la tasa de cambio a moneda local: ");
    let equivalente = dolares * tasa;
    alert("El equivalente en moneda local es: $" + equivalente);
}
function calcularTerreno() {
    let largo = prompt("Ingrese el largo del terreno: ");
    let ancho = prompt("Ingrese el ancho del terreno: ");
    let area = largo * ancho;
    let perimetro = 2 * (parseFloat(largo) + parseFloat(ancho));
    alert("El área es: " + area + " m²\nEl perímetro es: " + perimetro + " m");
}
function cambiarImagen() {
    document.getElementById("miImagen").src = "";
    alert("Imagen cambiada correctamente");
}
function cambiarImagen() {
   
    document.getElementById("logo").src = "https://picsum.photos/id/1025/200/200";

   
    alert("Imagen cambiada correctamente");
}
function cambiarTexto() {  
    document.getElementById("titulo").textContent = "¡Texto cambiado con JavaScript!";
    alert("Texto cambiado correctamente");
}