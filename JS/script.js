let producto1 = "Libro"
let precioProducto1 = 4000
let stockProducto1 = 3200
let cantidadSolicitadaProducto1 = 0
let subTotalProducto1 = 0

let producto2 = "Ta-Te-Ti"
let precioProducto2 = 1500
let stockProducto2 = 300
let cantidadSolicitadaProducto2 = 0
let subTotalProducto2 = 0

let producto3 = "Remera"
let precioProducto3 = 2500
let stockProducto3 = 350
let cantidadSolicitadaProducto3 = 0
let subTotalProducto3 = 0

let producto4 = "Almanaque"
let precioProducto4 = 1800
let stockProducto4 = 250
let cantidadSolicitadaProducto4 = 0
let subTotalProducto4 = 0

let producto5 = "Autito"
let precioProducto5 = 2900
let stockProducto5 = 380
let cantidadSolicitadaProducto5 = 0
let subTotalProducto5 = 0

let producto6 = "Remeras"
let precioProducto6 = 5000
let stockProducto6 = 440
let cantidadSolicitadaProducto6 = 0
let subTotalProducto6 = 0

let producto7 = "Planificado"
let precioProducto7 = 1000
let stockProducto7 = 600
let cantidadSolicitadaProducto7 = 0
let subTotalProducto7 = 0

let producto8 = "Juguete"
let precioProducto8 = 3000
let stockProducto8 = 340
let cantidadSolicitadaProducto8 = 0
let subTotalProducto8 = 0

let producto9 = "Libros de cuentos"
let precioProducto9 = 7000
let stockProducto9 = 280
let cantidadSolicitadaProducto9 = 0
let subTotalProducto9 = 0

let quiereContinuar = "no"
let valorPrecioTotal = 0

function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}

function precioTotal(){
        valorPrecioTotal = subTotalProducto1 + subTotalProducto2 + subTotalProducto3 + subTotalProducto4 + subTotalProducto5 + subTotalProducto6 + subTotalProducto7 + subTotalProducto8 + subTotalProducto9
        return 
}

function precioCantidadStock(numeroProductoSeleccionado, cantidadProductoSeleccionado){
    switch(numeroProductoSeleccionado){
        case "1":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto1 + " es de " + precioProducto1)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto1){
                cantidadSolicitadaProducto1 = cantidadSolicitadaProducto1 + cantidadProductoSeleccionado
                subTotalProducto1 = cantidadSolicitadaProducto1 * precioProducto1
                alert("La cantidad pedida de " + producto1 + " es de " + cantidadSolicitadaProducto1 + " y el sub total de la compra de " + producto1 + " es de " + subTotalProducto1)
                stockProducto1 = stockProducto1 - cantidadSolicitadaProducto1
                break
            }else{
                alert("La cantidad pedida de " + producto1 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto1 + "  unidades de " + producto1)
                break
            }
        case "2":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto2 + " es de " + precioProducto2)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto2){
                cantidadSolicitadaProducto2 = cantidadSolicitadaProducto2 + cantidadProductoSeleccionado
                subTotalProducto2 = cantidadSolicitadaProducto2 * precioProducto2
                alert("La cantidad pedida de " + producto2 + " es de " + cantidadSolicitadaProducto2 + " y el sub total de la compra de " + producto2 + " es de " + subTotalProducto2)
                stockProducto2 = stockProducto2 - cantidadSolicitadaProducto2
                break
            }else{
                alert("La cantidad pedida de " + producto2 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto2 + "  unidades de " + producto2)
                break
            }
        case "3":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto3 + " es de " + precioProducto3)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto3){
                cantidadSolicitadaProducto3 = cantidadSolicitadaProducto3 + cantidadProductoSeleccionado
                subTotalProducto3 = cantidadSolicitadaProducto3 * precioProducto3
                alert("La cantidad pedida de " + producto3 + " es de " + cantidadSolicitadaProducto3 + " y el sub total de la compra de " + producto3 + " es de " + subTotalProducto3)
                stockProducto3 = stockProducto3 - cantidadSolicitadaProducto3
                break
            }else{
                alert("La cantidad pedida de " + producto3 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto3 + "  unidades de " + producto3)
                break
            }
        case "4":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto4 + " es de " + precioProducto4)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto4){
                cantidadSolicitadaProducto4 = cantidadSolicitadaProducto4 + cantidadProductoSeleccionado
                subTotalProducto4 = cantidadSolicitadaProducto4 * precioProducto4
                alert("La cantidad pedida de " + producto4 + " es de " + cantidadSolicitadaProducto4 + " y el sub total de la compra de " + producto4 + " es de " + subTotalProducto4)
                stockProducto4 = stockProducto4 - cantidadSolicitadaProducto4
                break
            }else{
                alert("La cantidad pedida de " + producto4 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto4 + "  unidades de " + producto4)
                break
            }
        case "5":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto5 + " es de " + precioProducto5)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto5){
                cantidadSolicitadaProducto5 = cantidadSolicitadaProducto5 + cantidadProductoSeleccionado
                subTotalProducto5 = cantidadSolicitadaProducto5 * precioProducto5
                alert("La cantidad pedida de " + producto5 + " es de " + cantidadSolicitadaProducto5 + " y el sub total de la compra de " + producto5 + " es de " + subTotalProducto5)
                stockProducto5 = stockProducto5 - cantidadSolicitadaProducto5
                break
            }else{
                alert("La cantidad pedida de " + producto5 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto5 + "  unidades de " + producto5)
                break
            }
        case "6":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto6 + " es de " + precioProducto6)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto6){
                cantidadSolicitadaProducto6 = cantidadSolicitadaProducto6 + cantidadProductoSeleccionado
                subTotalProducto6 = cantidadSolicitadaProducto6 * precioProducto6
                alert("La cantidad pedida de " + producto6 + " es de " + cantidadSolicitadaProducto1 + " y el sub total de la compra de " + producto6 + " es de " + subTotalProducto6)
                stockProducto6 = stockProducto6 - cantidadSolicitadaProducto6
                break
            }else{
                alert("La cantidad pedida de " + producto6 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto6 + "  unidades de " + producto6)
                break
            }
        case "7":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto7 + " es de " + precioProducto7)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto7){
                cantidadSolicitadaProducto7 = cantidadSolicitadaProducto7 + cantidadProductoSeleccionado
                subTotalProducto7 = cantidadSolicitadaProducto7 * precioProducto7
                alert("La cantidad pedida de " + producto7 + " es de " + cantidadSolicitadaProducto7 + " y el sub total de la compra de " + producto7 + " es de " + subTotalProducto7)
                stockProducto7 = stockProducto7 - cantidadSolicitadaProducto7
                break
            }else{
                alert("La cantidad pedida de " + producto7 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto7 + "  unidades de " + producto7)
                break
            }
        case "8":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto8 + " es de " + precioProducto8)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto8){
                cantidadSolicitadaProducto8 = cantidadSolicitadaProducto8 + cantidadProductoSeleccionado
                subTotalProducto8 = cantidadSolicitadaProducto8 * precioProducto8
                alert("La cantidad pedida de " + producto8 + " es de " + cantidadSolicitadaProducto8 + " y el sub total de la compra de " + producto8 + " es de " + subTotalProducto8)
                stockProducto8 = stockProducto8 - cantidadSolicitadaProducto8
                break
            }else{
                alert("La cantidad pedida de " + producto8 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto8 + "  unidades de " + producto8)
                break
            }
        case "9":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto9 + " es de " + precioProducto9)
                break
            }else if(cantidadProductoSeleccionado <= stockProducto9){
                cantidadSolicitadaProducto9 = cantidadSolicitadaProducto9 + cantidadProductoSeleccionado
                subTotalProducto9 = cantidadSolicitadaProducto9 * precioProducto9
                alert("La cantidad pedida de " + producto9 + " es de " + cantidadSolicitadaProducto9 + " y el sub total de la compra de " + producto9 + " es de " + subTotalProducto9)
                stockProducto9 = stockProducto9 - cantidadSolicitadaProducto9
                break
            }else{
                alert("La cantidad pedida de " + producto9 + " es mas de lo que tenemos. Al momento podemos ofrecerle " + stockProducto9 + "  unidades de " + producto9)
                break
            }
        default:
            alert("No tenemos disponible ese producto")   
            break
    }

}

let quiereComprar = prompt("Desea comprar algun producto? \nResponda Si o No: ")
if(quiereComprar.toLowerCase() == "si"){
        do{
            let numeroProductoSeleccionado = prompt("Seleccione el numero del producto que desea comprar: \n1 Libro \n2 Ta-Te-Ti \n3 Remera \n4 Almanaque \n5 Autito \n6 Remeras \n7 Planificado \n8 Juguete \n9 Libros de cuentos") 
            //Menu de seleccion de producto

            precioCantidadStock(numeroProductoSeleccionado,0)

            let cantidadProductoSeleccionado = parseInt(prompt("Indique la cantidad que desee: "))
            //Consulta cuantos productos quiere, uso parseInt para que me guarde un valor numerico

            precioCantidadStock(numeroProductoSeleccionado,cantidadProductoSeleccionado)

            quiereContinuar = prompt("Desea comprar algun otro producto? \nResponda Si o No: ")
        } while (quiereContinuar.toLowerCase() == "si")
    precioTotal()
    alert("El precio total es: " + valorPrecioTotal)
    
}else{
    alert("Lo esperamos la proxima")
}

