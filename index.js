const express = require('express');
const app = express();

app.use(express.json());

const frases =[
    {id: 10 ,autor : 'maria antonia', frase:"frase da maria"},
    {id: 20 ,autor : 'Fernando Silvva', frase:"frase da Fernando"},
    {id: 30 ,autor : 'Beatriz Oliveira', frase:"frase da Beatriz"},
    {id: 40 ,autor : 'Mauro Ronaldo', frase:"frase do Mauro"},
    {id: 50 , autor : "Maikon Bueno", frase: "frase do maikon"}
];


app.get('/',(req , res) => {
    res.send("Prog. Web - Hello World.")

})

app.get('/frases',(req , res) => {
    res.send(frases);

})

app.post('/frases',(req , res) => {
   frases.push(req.body);
   res.status(201).send();
})

app.delete('/frases/:id', (req, res) => {
    let id = req.params.id;
    let index = frases.findIndex((frase) => frase.id == id);
    if (index == -1) {
        res.status(404).send();
    } else{
        frases.splices(index, 1);
        res.status(200).send();
    }
 })

 app.put('/frases:id', (req, res) => {
    let id = req.params.id;
    let frases = req.body;
    let index = frases.findIndex((frase) => frase.id == id);
    if (index == -1) {
        res.status(404).send();
    } else{
        frases[index].autor = frase.autor;
        frases[index].frase = frase.frase;
        res.status(200).send();
    }
   })



const port =8080;
app.listen(port,(err)=> {
    if(err){
        console.error("Erro na aplicacao", err)
    }
    console.log (`Aplicacao esculta na porta: ${port}`);
})