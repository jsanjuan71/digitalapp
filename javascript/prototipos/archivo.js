var Archivo =  function(){
    var self  = this;
    var nombre;
    var tipo;
    var tamano;
    var fecha_modificacion;
    var ruta;

    this.setRuta = function(nva_ruta){
        ruta = nva_ruta;
    }


    /*mysql.query("select",null, function(error, response){
        self.setRuta( response.ruta );
        this.commit();
    }) */
    return self;
}