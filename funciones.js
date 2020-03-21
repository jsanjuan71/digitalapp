

var edad = 28;

function calcular_iva(precio_base){
    return precio_base * 1.16;
}
function area_circulo(radio, precio, callback){
    if(typeof radio !== "number" || radio < 0)    
        return {
            "error": true,
            "motivo": "El radio debe ser un número mayor a cero"
        };
    var area = Math.PI * Math.pow(radio, 2);
    return {
        "error": false,
        "resultado": area * precio
    };

}


console.log("Hola Nancy");

function saludar(nombre, edad){
    console.log(`Hola ${nombre}!`);

}
var segundos  = 5;
window.setTimeout( function(nombre, edad){
    console.log(`Hola ${nombre}!`);

} , segundos * 1000, "Julio");

if(a>b) c;
if(a>b){
    c;
    d;
}

window.setTimeout( (nombre) => console.log(`Hola ${nombre} tienes ${edad} años!`) , segundos * 1000, "Julio");

//Modo flecha
canciones.map((value,index)=>console.log(indice, value.titulo));

//modo anónima
canciones.map(function(value, index){
    console.log(indice, value.titulo);
});

//modo funcion  normal
function mostrar_letra(value, indice){
    console.log(indice, value.titulo);
}
canciones.map(mostrar_letra);


var radio = 3.54;
var precios_circulos = [10,20,30,40];
b = parseInt(radio);
c = calcular_iva( precios_circulos[1] );
var a = area_circulo(b,c, null);
console.log(radio);
console.log(precios_circulos);
area_circulo(b,c, get_edad);
get_edad();



