var Dashboard =  function(){
    var btn_agregar;
    var lista_documentos = [];

    this.agregar_documento = function(doc){
        lista_documentos.push(doc);
    }

    this.mostrar_lista = function(){
        for(var doc of lista_documentos){
            renderizar("fila_documento",doc,(fila)=>{
                $("#listado").find("tbody").first().append(fila);
            });
        }
    }

    this.eliminar_documento = function(doc){
        //lista_documentos.push(doc);
        console.log("eliminando");
        for(var documento of lista_documentos){
            if(doc == documento){
                console.log("igual");
                console.log(documento.getNombre());
            }
        }

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