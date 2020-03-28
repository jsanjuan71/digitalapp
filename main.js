console.log("hola mundo desde nodejs");
const path = require('path');
var miruta = path.dirname("__file__");
console.log(miruta);



var http = require("http");
var puerto = 2020;
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`
        <h1 style="color:red">Hoy es: ${new Date().toLocaleDateString()}</h1>
    `);
});
server.listen(puerto);
console.log("Servidor iniciado");



/*http.createServer(function(request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hola Mundo!\n');
}).listen(8000);
console.log('Servidor en la url http://127.0.0.1:8000/'); */