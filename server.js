const express = require ('express');
const server = express();



//retornar 


//1 exercicio retornar lista de tarefas
    var arquivo = require('./lista.json');
    server.get('/tarefas/', function (req, res) { 
        res.send(arquivo); // do exercicio 1
    });

 //2 exercicio retornar só por id 

    server.get('/id', function (req, res) {       
       let filtrar = arquivo.filter((tarefa) => { 
            return tarefa.id === 2;       
         })
         console.log(filtrar);      
         res.send(arquivo); 
});

 //mostrar somente iten concluidos, get tarefas/concluidos/filtrar

    server.get('/concluido', function (req, res) {
        let buscarconcluidos = arquivo.filter((tarefa) => {
            return tarefa.concluido ===  'true';

        })  
        res.send(buscarconcluidos)
    })


//buscando por colaborador

    server.get('/colaborador/:id', function (req, res) {
        let colaborador = arquivo.filter((arquivo) => {
            return arquivo.nomeColaborador === nomeColaborador;
            
        })
        res.send(colaborador)
    })


server.listen(3000);

