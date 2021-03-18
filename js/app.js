
// Obtener el valor de alojamiento de acuerdo a la cantidad de personas y noches a ospedarse!!!
// Se obtiene un descuento por ospedarse 7 o mas dias!!!


let persona = Number(prompt("ingrese cantidad de personas"));
let noches = Number(prompt("ingrese cantidad de noches"));
let cabana_economica = 2000; //boton para seleccionar cabaña economica
let cabana_familiar = 5000; //boton para seleccionar cabaña familiar
let cabana_ejecutiva = 8000; //boton para seleccionar cabaña ejecutiva
 
function multiplicar(persona, noches, cabana_economica,) {    
 
    let precio_total = persona * noches * cabana_economica;
console.logt(`el Valor total de la estadia es ${precio_total}`);
    if (noches >=7) {
        let precio_total = persona * noches * cabana_economica;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        console.log(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
    }
 
}

function multiplicar(persona, noches, cabana_familiar) {   

    let precio_total = persona * noches * cabana_familiar;
    console.log(`el Valor total de la estadia es ${precio_total}`);
    if  (noches >=7) {
        let precio_total = persona * noches * cabana_familiar;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        console.log(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
    }
}

function multiplicar(persona, noches, cabana_ejecutiva) {

    let precio_total = persona * noches * cabana_ejecutiva;
    console.log(`el Valor total de la estadia es ${precio_total}`);
    if (noches >=7) {
        let precio_total = persona * noches * cabana_ejecutiva;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        console.log(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
}
}

multiplicar(persona, noches, cabana_economica);
multiplicar(persona, noches, cabana_familiar);
multiplicar(persona, noches, cabana_ejecutiva);
