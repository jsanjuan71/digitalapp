/*var nombre;
nombre = window.prompt("Dime tu nombre");
window.alert("Tu nombre es: " + nombrex); 
window.alert(`Tu nombre es: ${nombrex}. Bienvenida! ${10+1}`); 

var pdf= `${titulp}
         Este documentos es para ${motivo}
         jbdehbchdb
         `;

var edad = 24;

if( edad < 18){
    console.log("eres menor de edad");
} else if(edad > 60){
    console.log("eres de la tercera edad");
} else{
    console.log("eres joven");
}
var nombre = "julio";
var cantidad_hijos = window.prompt("cuanto hijos biologicos tienes?");
var cantidad_hijos_adoptados = window.prompt("cuanto hijos adoptados tienes?");
if(cantidad_hijos ==  0 ){
    window.alert("todo el dinero es tuyo");
} else{
    window.alert( 100 / cantidad_hijos );
}


if(cantidad_hijos) {
    window.alert( 100 / cantidad_hijos );
} else {
    window.alert("todo el dinero es tuyo");
}

window.alert(
    cantidad_hijos? 
        "Tu tienes "+ cantidad_hijos +" hijo"+ (cantidad_hijos>1? "s":"") 
        : "No tienes hijos"
    );

'd' "cadena"    ``

window.alert( 100 / (cantidad_hijos || 1) );
window.alert( 100 / (2 || 1) );    100 / 2
window.alert( 100 / (0 || 1) );    100 / 1

var edad_nancy = 24;
var edad_julio = 28;
var edad_luz = 31;



var edades = [24,28,31];
console.log(edades)
var edades_index = 0 ;
edades[(edades_index*=2) = 24;
//edades_index = edades_index +1;
//edades_index++;
edades[edades_index++] = 28;
edades[edades_index++] = 31;

A + B = C  -> infija
+ A = C       prefija       -(+5) = -5
A + = C       posfija       +5(*)x = 10







var nombre = "nancy";

nombre.spl
*/

var reloj = [11,28,30,2];
console.log( ""+ reloj[0] + ":" +reloj[1] + ":" + reloj[2] );
console.log(`${reloj[0]}:${reloj[1]}:${reloj[2]}`);
console.log(reloj.join(":"));
console.log(reloj.sort());
var multi = 1;
for(var f = 0; f< reloj.length ; f++){
    console.log( reloj[f] *  (multi++)  + " ");
}
console.log( "____________" );

for(var valor of reloj){
    console.log( valor * 3 );
}

//var {hora, minuto: segundo} = reloj;

console.log(hora);

reloj.map(val=>console.log(val));

reloj.sort((a,b)=>{
    return a > b
})

reloj.forEach((val, ind, arr, arr_pt)=>{

});

for(var indice in reloj){
    console.log( indice );
}


var persona = ["Nancy","Guadalajara",1.59,10000000,24];
console.log( persona[1] );

var persona_json = {
    "nombre" : "Nancy",
    "ciudad" : "Guadalajara",
    "estatura" : 1.59,
    "dinero_en_el_banco" : 10000000,
    "edad" : 24,
    "tarjetas": [
        {"numero_tarjeta":"424232342", "fecha_vencimiento":[2,16]},
        {"numero_tarjeta":"4343434343", "fecha_vencimiento":"04/26"}
    ],
    "decir_nombre" : function(){
        return `Me llamo ${this.nombre}`;
    }
}

persona_json["telefono"] = "33333333";

for(var indice in persona_json){
    console.log( indice );
    if(indice == "autos"){
        window.alert("si tiene tarjetas");
    }
}

switch(persona_json.ciudad){
    case "guadalajara":
        console.log("eres de mi tierra");
    break;
    case "cdmx":
        console.log("eres cdmexiquense");
    break;
    default:
        console.log("eres de otra ciudad");
    break;
}

do{

} while();

while(){

}




console.log (JSON.stringify(persona_json) );

/*
 * ACTIVIDAD
 * Lista de canciones    
   lanzar una caja de texto para escribir la cancion que busco
   buscarla en la lista
   mostrar el titulo y la letra debajo.
 * Cancio: objeto -> titulo, letra, artista
 * 
 * 
 *  
 */








