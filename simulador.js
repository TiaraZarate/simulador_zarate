let cantProductos = 0;
// Array
let producto = [0, 0, 0, 0]
let pizza = producto[0]
let empanada =  producto[1]
let tarta = producto[2]
let milanesa = producto[3]
let totalproductos = 0



//while . ciclo para ir sumando productos. que se repite mientras el usuario ingrese si y se corta cuando el usuario ingrese no/ESC
while (cantProductos >= 0) {
    if (prompt('Desea agregar productos si/no/ESC') == 'si'){
          producto = prompt("VENTA DE PRODUCTOS CONGELADOS: \n Ofrecemos: \n \t 1-PIZZA, \n \t 2-EMPANADA, \n \t 3-TARTA, \n \t 4-MILANESA. \n Ingrese el NUMERO del producto que desea. Para finalizar, escriba ESC.");

        if (producto == 1){
            pizza++

            cantProductos++
        };
        if (producto == 2){
            empanada++

            cantProductos++

        };
        if (producto == 3){
            tarta++

            cantProductos++

        };
        if (producto == 4){
            milanesa++

            cantProductos++

        };

        if (producto == 'ESC'){
            break;
        }
    } else {
        break;
    }
}
//Muestra la cantidad de productos asquiridos en la consola
if(pizza !=0){
    console.log('Has comprado: ' + pizza + ' cantidad de pizza.');
}
if(empanada !=0){
    console.log('Has comprado: ' + empanada + ' cantidad de empanadas.');
}
if(tarta !=0){
    console.log('Has comprado: ' + tarta + ' cantidad de tarta.')
}
if(milanesa != 0){
    console.log('Has comprado: ' + milanesa + ' cantidad de milanesa.');
}


console.log('En total has adquirido ' + cantProductos + ' cantidad de productos.')

totalproductos = ((pizza * 800)+ (empanada * 1200) + (tarta * 900) + (milanesa * 1000));

//Funcion para calcular el pago en cuotas o en efectivo
function medios_de_pago(){
    let pago;

        if (cantProductos > 0){
        pago = prompt("desea abonar en efectivo (10% DE DESCUENTO) o tarjeta");
        
        if (pago == "efectivo"){
        return "el total a abonar EN EFECTIVO, con el 10% de descuento realizado es: $" + (totalproductos*0.9 );
        }

        if (pago == "tarjeta"){
            pago = prompt("en cuantas cuotas queres pagar 3/6/9/12?");
        }

        if(pago == 3){
            let pago_en_3_cuotas = totalproductos * 0.15;
            return "El precio final es "+ totalproductos + " Serian  3 cuotas de $ " + pago_en_3_cuotas + " .Disfrute su compra."
        }
        if(pago == 6){
            let pago_en_6_cuotas = totalproductos * 0.20;
            return "El precio final es "+ totalproductos +  " Serian  6 cuotas de $ " + pago_en_6_cuotas + " .Disfrute su compra."
        }
        if(pago == 9){
            let pago_en_9_cuotas = totalproductos * 0.25;
            return "El precio final es "+ totalproductos + " Serian 9 cuotas de $  " + pago_en_9_cuotas + " .Disfrute su compra."
        }
        if(pago == 12){
            let pago_en_12_cuotas = totalproductos * 0.30;
            return "El precio final es "+ totalproductos + " Serian 12 cuotas de $  " + pago_en_12_cuotas + " .Disfrute su compra."
        }
        else if (pago =! "efectivo"|| "tarjeta"){ 
            pago = prompt("desea abonar en efectivo (10% DE DESCUENTO) o tarjeta");
            return "Debe ingresar una opcion valida (efectivo o numero de cuotas 3/6/9/12)"
        }
}
}
console.log(medios_de_pago());