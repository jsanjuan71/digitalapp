var Documento = function(nom_doc){
    var nombre = nom_doc;
    var archivos = [];
    this.getNombre = function(){
        return nombre;
    }

    this.setNombre = function(nvo_nombre){
        nombre = nvo_nombre;
    }

    function mostrar(){
        console.log(nombre);
    }
    return this;
}