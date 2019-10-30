const express = require ('express');
const server = express();

//retornar lista de tarefas
//segunda retornar só por id 
//retornar 
var arquivo = require('./lista.json'); // do exercicio 1, Desde que arquivo.js esteja na mesma pasta]

/*
    server.get('/', function (req, res) {      // do exercicio 1 cnsulta rota, funcruon 
       let filtrar = arquivo.filter((tarefa) => {
            return tarefa.id === 2;
         })
     
         console.log(filtrar);
         res.send(arquivo); // do exercicio 1
});


*/
// mostrar somente iten concluidos, get tarefas/concluidos/filtrar
server.get('/', function (req, res) {
    let buscarconcluidos = arquivo.filter((tarefa) => {
        return tarefa.concluido ===  'true';

    })

    console.log(buscarconcluidos);
    res.send(arquivo)
})


server.listen(3000);


