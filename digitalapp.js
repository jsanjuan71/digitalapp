var dashboard = new Dashboard();
console.log(dashboard);

var usuarios = [
    {
        "Nombre":"Julio Sanjuan",
        "usuario":"jsanjuan",
        "clave":"1234",
        "secret":{
            "pregunta":"tu numero de la suerte",
            "respuesta":7
        }
    },
    {
        "Nombre":"Nancy García",
        "usuario":"ngarcia",
        "clave":"321",
        "secret":{
            "pregunta":"Nombre de tu primer mascota",
            "respuesta":11
        }
    }
];
var usr = document.getElementById("usr");
var pass = document.getElementById("pass");
var ingreso = document.getElementById("ingreso");
var div_login = document.getElementById("login");
var div_app = document.getElementById("app");
var div_registro = document.getElementById("registro");
var div_recuperacion = document.getElementById("recuperacion");
var logout = document.getElementById("logout");
var abrir_registro = document.getElementById("abrir_registro");
var abrir_recuperar = document.getElementById("abrir_recuperar");

$("#btn_crear").click(function(){
    $("#fila_nuevo_doc").show();
});

$("#btn_nuevo_doc_crear").click(function(){
    // agregar un documenton nuevo
    
    var nom = $("#input_nuevo_doc").val().trim();

    if(!nom.length){
        $("#alert_nvo_doc").html("El nombre no debe estar vacío.");
        return;
    }
    var car_esp = /\@|\!|\^/gi;
    if(car_esp.test(nom)){
        $("#alert_nvo_doc").html("El nombre no debe contener los siguientes caracteres: @, ! y ^");
        return;
    }
    if(dashboard.existe(nom)){
        $("#alert_nvo_doc").html(`El documento "${nom}" ya existe`);
        return;
    }
    
    var ndoc = new Documento(nom);
    dashboard.agregar_documento(ndoc);
    $("#fila_nuevo_doc").hide();
    var fila_html = `
    <tr>
        <td scope="row">${nom}</td>
        <td>
            <button class="btn upload"><i class="fa fa-upload"></i></button>
        </td>
        <td>
            <button class="btn edit"><i class="fa fa-edit"></i></button>
            <button class="btn delete"><i class="fa fa-minus"></i></button>
        </td>
    </tr>`;

    var fila = $(fila_html);
    var btn_edit = fila.find(".edit").first();
    var btn_upload = fila.find(".upload").first();
    var btn_delete = fila.find(".delete").first();

    $(btn_edit).click(function(){
        $(fila).hide();
        var fila_editar_html = `
            <tr>
                <td scope="row"> <input type="text" value="${nom}"> </td>
                <td>
                </td>
                <td>
                    <button class="btn guardar_edit"><i class="fa fa-check"></i></button>
                </td>
            </tr>`;
        var fila_edit = $(fila_editar_html);
        $(fila).after(fila_edit);
        var btn_guar_edit = fila_edit.find(".guardar_edit").first();
        $(btn_guar_edit).click(function(){
            $(fila_edit).remove();
            $(fila).show();
            //Editar campo nombre de la fila
            //Editar atributo nombre del objeto de documento
        });
    });

    $("#listado").find("tbody").first().append(fila);


    //ndoc.setNombre(nom);
    /*
    var nom = "rfch ola";
    var car_esp_letra = /^\d$|^\w\s*+$/;
    var especiales = ['@','!','^'];
    var numero = 10;
    var texto = "23este es el2 _ABC_dario _a234bc_iencia ";
    let l_er_usuario = [];
    l_er_usuario[0] = /[0-9]/gi; //digitos
    l_er_usuario[1] = /\d/gi; //digitos
    l_er_usuario[2] = /\w/gi; //letras
    l_er_usuario[3] = /(\w+)/gi; //palabras
    l_er_usuario[4] = /^\d/gi; //inicia con numero
    l_er_usuario[5] = /^(\d+)/gi; //inicia con numero completo
    l_er_usuario[6] = /.\d./gi; //un número en medio
    l_er_usuario[7] = /.\d$/gi; //un número al final
    l_er_usuario[8] = /\w\s\w/gi; //un espacio en medio
    l_er_usuario[9] = /(\w+)\s(\w+)/gi; //palabras con espacio

    er_usuario = l_er_usuario[3];

    console.log("______________________________");
    console.log("REGEXP",er_usuario);
    console.log("ENTRADA", nom);
    console.log("test", er_usuario.test(nom));
    console.log("match", nom.match(er_usuario));
    console.log("search", nom.search(er_usuario));
    console.log("replace", nom.replace(er_usuario,"*"));
    console.log("replace con agrupador", usu.replace(er_usuario,' _$1_ '));
    //console.log("replace", usu.replace(er_usuario,'$2 - $1'));
    console.log("split", usu.split(er_usuario)); "hola-mundo-javascript".split(/\s/)*/

    
});

ingreso.addEventListener("click", function(e){
    console.log(event);
    console.log(usr.value);
    console.log(pass.value);
    usuarios.map( (usuario)=>{
        if(usuario.usuario == usr.value){
            if(usuario.clave == pass.value){
                div_login.style.display = "none";
                div_app.style.display = "block";
            } else{
                window.alert("credenciales incorrectas, intente de nuevo");
            }
        } 
    });
});

logout.addEventListener("click", function(e){
    div_login.style.display = "block";
    div_app.style.display = "none";
    usr.value = "";
    pass.value = "";
});

abrir_registro.addEventListener("click", function(){
    div_registro.style.display = "block";
    div_login.style.display = "none";

});

document.getElementById("registrar").addEventListener("click", function(){
    var inputs = div_registro.getElementsByTagName("input");
    var selects = div_registro.getElementsByTagName("select");
    var selects_jq = $(div_registro).find("select");
    var nom = inputs[0].value;
    var usu = inputs[1].value;
    var clave = inputs[2].value;
    var clave_confirm = inputs[3].value;
    var resp = inputs[4].value;
    var preg = selects[0].value;
    var preg_jq =  selects_jq.first().val();
    let l_er_usuario = [];
    l_er_usuario[0] = /[0-9]/gi; //digitos
    l_er_usuario[1] = /\d/gi; //digitos
    l_er_usuario[2] = /\w/gi; //letras
    l_er_usuario[3] = /(\w+)/gi; //palabras
    l_er_usuario[4] = /^\d/gi; //inicia con numero
    l_er_usuario[5] = /^(\d+)/gi; //inicia con numero completo
    l_er_usuario[6] = /.\d./gi; //un número en medio
    l_er_usuario[7] = /.\d$/gi; //un número al final
    l_er_usuario[8] = /\w\s\w/gi; //un espacio en medio
    l_er_usuario[9] = /(\w+)\s(\w+)/gi; //palabras con espacio

    er_usuario = l_er_usuario[3];

    console.log("______________________________");
    console.log("REGEXP",er_usuario);
    console.log("ENTRADA", usu);
    console.log("test", er_usuario.test(usu));
    console.log("match", usu.match(er_usuario));
    console.log("search", usu.search(er_usuario));
    console.log("replace", usu.replace(er_usuario,"*"));
    console.log("replace con agrupador", usu.replace(er_usuario,' "$1" '));
    //console.log("replace", usu.replace(er_usuario,'$2 - $1'));
    console.log("split", usu.split(er_usuario));

    let promesa = new Promise(function(cumplir, rechazar){
        setTimeout(function(){
            var numero = Math.random()*10 + 1;
            console.log();
        }, 10 * 1000);
    });

    return;
    if(nom.trim().length==0){
        window.alert("El nombre no debe estar vacio");
        return;
    }
    if(usu.trim().length==0){
        window.alert("El usuario no debe estar vacio");
        return;
    }
    if(clave.trim().length==0){
        window.alert("La contraseña no debe estar vacia");
        return;
    }
    if(clave_confirm.trim().length==0){
        window.alert("El nombre no debe estar vacio");
        return;
    }
    if(clave_confirm.trim() !==  clave.trim()){
        window.alert("Las contraseñás no coinciden");
        return;
    }
    if(resp.trim().length == 0 ){
        window.alert("Las respuesta no debe estar vacia");
        return;
    }
    usuarios.push(
        {
            "Nombre": nom,
            "usuario": usu,
            "clave": clave,
            "secret":{
                "pregunta": preg ,
                "respuesta": resp
            }
        }
    );
    window.alert("Usuario registrado correctamente");
    div_registro.style.display = "none";
    div_login.style.display = "block";

});

abrir_recuperar.addEventListener("click", function(){
    div_recuperacion.style.display = "block";
    div_login.style.display = "none";
});


$("#recuperar").click(function(){

});

document.getElementById("recuperar").addEventListener("click", function(){

});

$("#usu_rec").change(function(){
    var valor = $(this).val();
    var encontrado = false;
    for(var usuario of usuarios){
        if(usuario.usuario == valor){
            $(this).next().html(usuario.secret.pregunta);
            $(this).next().next().attr("disabled", false).focus();
            encontrado = true;
        }
    }
    if(!encontrado){
        $(this).next().html("Aquí aparecerá tu pregunta");
        $(this).next().next().attr("disabled", true);
    }
});


$("#usu_rec").focus(function(){
    console.log("tenngo el foco");
});


/*var res = $("p");
console.log(res); */

/**
 * 
 *  CORE (jquery) -> nucleo  -> corazon
 *  plugin -> jquery-ui  -> jqwidgets
 *          jquery-ui: componenetes
 *              jquery-ui-calendar
 * 
 *          import jquery-ui.min.js (bundle)
 *          import (out-of-the-box)
 *                  impòrt jquery-ui-base.js
 *                  import jquery-ui.calendar,js
 *          
 *  complemento
 *  modulo
 */


$("#recuperar").click(function(){
    var accion = $(this).data("accion");
    console.log("accion", accion);
    if(accion == "pregunta"){
        $(this).html("Continuar");
        var usu = $("#usu_rec").val();
        var resp= $("#usu_rec").next().next().val();
        for(var usuario of usuarios){
            if(usuario.usuario == usu){
                if(usuario.secret.respuesta == resp){
                    //$("#recuperacion").find("input[type='password']");
                    console.log( $("#recuperacion") );
                    console.log( $("#recuperacion").find("input[type='password']")  );
                    var input = $("#recuperacion").find("input[type='password']").first();
                    input.show().css("color", "red");
                    //$(this).attr("data-accion","guardar");
                    $(this).data("accion", "guardar");
                    $(this).html("Guardar");
                   
                } else{
    
                }
            }
        }
        
    } else if(accion == "guardar"){
        var input = $("#recuperacion").find("input[type='password']").first();
        var newpass = input.val();
        var usu = $("#usu_rec").val();
        for(var usuario of usuarios){
            if(usuario.usuario == usu){
                usuario.clave = newpass;
                //div_recuperacion.style.display = "none";
                //div_login.style.display = "block";
                $(div_recuperacion).hide();
                $(div_login).show();
                break;
            }
        }
    }
   
});

//https://www.w3schools.com/cssref/css_selectors.asp


/*document.getElementById("usu_rec").addEventListener("change", function(){
    console.log("evento change", this);
    window.setTimeout(()=>{
        console.log("primero timeout", this);
        window.setTimeout(function(){
            console.log("segundo timeout", this);

        }, 2000);
    }, 2000);

    for(var usuario of usuarios){
        if(usuario.usuario == this.value){
            console.log( this ) 
        }
    }
}) */


