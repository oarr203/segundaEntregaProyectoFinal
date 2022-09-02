let producto = document.getElementById("producto")
let cantidad = document.getElementById("cantidad")
let valor = document.getElementById("valor")
let agregar = document.getElementById("agregar")
let resultado = document.getElementById("resultado")
let mostarCostoTotal = document.getElementById("mostarCostoTotal")
let lista = document.getElementById("lista")
let costo = document.getElementById("costo")
let listaLocal = document.getElementById("listaLocal")
let descuento = document.getElementById("check")


let total = 0



function precio(e) {
    e.preventDefault()
    let precioUnitario = cantidad.value * valor.value;

    total += precioUnitario
    resultado.innerHTML = "$: " + total


    localStorage.setItem("producto", producto.value)
    localStorage.setItem("cantidad", cantidad.value)
    localStorage.setItem("costo", valor.value)

    let productoLocal = localStorage.getItem("producto")
    let cantidadlocal = localStorage.getItem("cantidad")


    let elemento = document.createElement("li");
    elemento.innerHTML += productoLocal + " x " + cantidadlocal + " unidades = " + precioUnitario + " pesos"
    lista.appendChild(elemento)

    producto.value = "";
    cantidad.value = "";
    valor.value = "";
}



function costoTotal() {

    if (descuento.checked) {
        mostarCostoTotal.innerHTML = " El total de la compra con descuento del 10% es: $ " + total * 0.9 + "pesos";

    } else {
        mostarCostoTotal.innerHTML = " El total de la compra es: $ " + total + "pesos";

    }

}
agregar.onclick = precio;
costo.onclick = costoTotal;