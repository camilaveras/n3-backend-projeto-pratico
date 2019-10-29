const express = require ('express');
const server = express();

var arquivo = require('./lista.json'); //Desde que arquivo.js esteja na mesma pasta]

    server.get('/', function (req, res) {
        let concluidas = arquivo.filter((tarefa) => {
            return tarefa.id === 2;
         })
     
         console.log(concluidas);
         res.send(arquivo);
})

server.listen(3000);
