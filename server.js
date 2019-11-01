const express = require ('express');
const server = express();



//1 exercicio retornar lista de tarefas  http://localhost:3000/tarefas
    var arquivo = require('./lista.json');
    server.get('/tarefas/', function (req, res) { 
        res.send(arquivo); // do exercicio 1       

    });


 //2 exercicio retornar só por id : http://localhost:3000/tarefas/id/3

    server.get('/tarefas/id/:id', function (req, res) {    
        const id = req.params.id   
       let filtrar = arquivo.filter((tarefa) => { 
            return tarefa.id == id;      
         })
         res.send(filtrar); 
});

 //mostrar somente iten concluidos, get http://localhost:3000/tarefas/concluido

    server.get('/tarefas/:concluido', function (req, res) {
        let buscarconcluidos = arquivo.filter((tarefa) => {
            return tarefa.concluido ===  'true';

        })  
        res.send(buscarconcluidos)
    })


//buscando por colaborador 


    server.get('/tarefas/colaborador/:nome', function (req, res) {
        const name = req.params.nome
        let colaborador = arquivo.filter((colaborador) => {
            return colaborador.nomeColaborador === name;
        })
       
        res.send(colaborador)
        console.log(colaborador)

    })


server.listen(3000);



/*.sort((a, b) => {
    return a.dataInclusao < b.dataInclusao
})

*/
