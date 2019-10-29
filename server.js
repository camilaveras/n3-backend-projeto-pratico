const express = require ('express');
const server = express();


var arquivo = require('./lista.json'); //Desde que arquivo.js esteja na mesma pasta
    server.get('/', function (req, res) {
        
    
        let concluidas = arquivo.filter((tarefa) => {
            console.log(tarefa.id);           //aqui dentro tarefa existe
            return tarefa.concluido === true;
         })
     
         console.log(concluidas);
         res.send(arquivo);

})





server.listen(3000);
