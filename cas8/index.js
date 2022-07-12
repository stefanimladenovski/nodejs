// se importira paketot express
const express = require('express');
const handlers = require('./handlers')  //se povikuva folderot kade sto se naogjaat funkciite
//se kreira nova express aplikacija
const app = express();  

app.use(express.json());

// da se dodade nova ruta na aplikacijatad
app.get('/home', handlers.home)
//http metod GET prima dva parametri prviot e rutata a vtoriot funkcija

app.get('/calc/:operation', handlers.calculator);  // nova ruta GET- zemes

app.post('/calc/:operation', handlers.calculator2); //nova ruta POST - ispratis


//start na apliakcijata

app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('SERVER SUCCESSFULLY STARTED');
});


//REST METHODS
//GET -prezemanje
//POST - isprakjanje
//PUT - modifikacija, update, menuvanje 
//PATCH - 
// DELETE - izbrise