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

//ordenando por data 

server.get('/tarefas/', function (req, res) {
    let buscardatainclusao = arquivo.filter((tarefa) => {
        return tarefa.dataInclusao ===  buscardatainclusao;

    })  
    res.send(buscardatainclusao)
})
     //      let datadata = arquivo.sort((a, b) => {
       // return a.dataInclusao < b.dataInclusao

       
  const d = new Date( "13-01-2011".replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") );
console.log(d);


//resultado aqui vai ser: 2011-01-13T02:00:00.000Z
server.listen(3000);

