/* Funcion para el descuento del 10% */
function descuento(precio){return precio-(precio*0.1)}
function main(){
    /* Precio de los productos */
    const producto1 = 2000
    const producto2 = 3000
    const producto3 = 4000
    let menu = prompt("BIENVENIDO A LA TIENDA\n" + "Que le gustaria hacer:\n" + "1 - Comprar\n" + "2 - Salir\n" + "--------------\n" +"OFERTA!!!\n" + "SI SU COMPRA SUPERA LOS 10000$ TIENE UN 10% DE DESCUENTO!!!\n" + "--------------")   //Menu de inicio
    while(menu !== "2"){
        if (menu === "1"){
            let productos = prompt("Seleccione los productos que quiere comprar:\n" + "1 - Producto 1\n" + "2 - Producto 2\n" + "3 - Producto 3\n" + "4 - Salir")   // menu de seleccion de productos
            let cantProductos = 0 // Contador de productos
            let precioTotal = 0 // Cantidad del precio todal
            while(productos !== "4"){
                if (productos === "1"){
                    precioTotal = precioTotal + producto1
                    cantProductos ++
                    alert("Se agrego el producto 1 a su carrito!!")
                }else if (productos === "2"){
                    precioTotal = precioTotal + producto2
                    cantProductos ++
                    alert("Se agrego el producto 2 a su carrito!!")
                }else if (productos === "3"){
                    precioTotal = precioTotal + producto3
                    cantProductos ++
                    alert("Se agrego el producto 3 a su carrito!!")
                }else{
                    alert("Ese producto no se encuentra en el catalogo")
                }
                productos = prompt("Seleccione los productos que quiere comprar:\n" + "1 - Producto 1\n" + "2 - Producto 2\n" + "3 - Producto 3\n" + "4 - Salir\n" + "--------------\n" + "Cantidad de productos en el carrito: " + cantProductos + "\n" + "--------------")
            }
            if(cantProductos === 0){
                alert("No se agrego nada a su carrito")
            }else{
                if(precioTotal > 10000){
                    alert("La cantidad de productos en su carrito es " + cantProductos +" y su el precio final es " + descuento(precioTotal) + "$\n" +  "--------------\n"+ "TIENE UN DESCUENTO DEL 10% PORQUE SU COMPRA SUPERÓ LOS 10000$")
                }else{
                    alert("La cantidad de productos en su carrito es " + cantProductos +" y su el precio final es " + precioTotal + "$")
                }
            }
        }else{
            alert("Opcion Incorrecta")
        }
        menu = prompt("BIENVENIDO A LA TIENDA\n" + "Que le gustaria hacer:\n" + "1 - Comprar\n" + "2 - Salir ")
    }
    alert("Gracias por visitar la tienda , vuelva pronto!!")
}
main() // llamo a la funcion main