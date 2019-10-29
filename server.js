const express = require ('express');
const server = express();


var arquivo = require('./lista.json'); //Desde que arquivo.js esteja na mesma pasta
server.get('/', function (req, res) {
    res.send(arquivo);

})

/*server.get('/', (req, res, next) => {
res.json();


});
*/

server.listen(3000);

