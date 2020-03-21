var Dashboard =  function(){
    var btn_agregar;
    var lista_documentos = [];

    this.agregar_documento = function(doc){
        lista_documentos.push(doc);
    }
    this.existe = function(nom_doc){
        for(var doc of lista_documentos){
            if(doc.getNombre() == nom_doc){
                return true;
            }
        }
        return false;
    }
}