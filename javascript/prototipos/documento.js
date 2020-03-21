var Documento = function(){
    var nombre;
    var archivos = [];
    this.guardar
    this.cargar
    this.reemplazar
    this.getNombre = function(){
        return nombre;
    }

    function mostrar(){
        console.log(nombre);
    }
    return this;
}