// ДОМАШНА!!!

// рута POST /studenti
// на неа да можете да пратите JSON
/*
{
    "ime": "Pero",
    "prezime": "Perovski",
    "prosek": 9.2
}
*/
// откако handler функцијата ќе ги прими податоците, треба да ги запише во текстуелен фајл

const express = require('express');

const handlers = require('./handlers')

const app = express();  
app.use(express.json());
app.post('/studenti', handlers.studenti);



app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('SERVER SUCCESSFULLY STARTED');
});