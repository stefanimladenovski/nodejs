// ако некој внесе и отвори URL 
// http://localhost:10000/plus/2/3 (req.url)
// сакам да ми врати резултат 5 (res.end)


// ако некој внесе и отвори URL 
// http://localhost:10000/minus/10/2 (req.url)
// сакам да ми врати резултат 8 (res.end)
// .. слична имплементација за множење и делење

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    console.log(req.url.split("/"));
    let [_, operator, a, b] = req.url.split("/");
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "plus":
            return res.end(`${a + b}`);
        case "minus":
            return res.end(`${a - b}`);
        case "mnozenje":
            return res.end(`${a * b}`);
        case "delenje":
            return res.end(`${a / b}`);
        default:
            return res.end("Unknown operation");
    }
});

server.listen(8080);