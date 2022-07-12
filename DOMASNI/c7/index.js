const http = require('http');
const url = require('url');
const fs = require('fs');

const fileRead = (filename) => {
    return new Promise((success, fail) => { 
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./index.html`);
    return content.replace('{{res}}', data);
};

const presmetki = {

    '/plus': async (req, res) => {
        let rez = `${Number(req.query.a) + Number(req.query.b)}`;
        res.end(await render('index.html', rez));
    },
    '/minus': async (req, res) => {
        let rez = `${Number(req.query.a) - Number(req.query.b)}`;
        res.end(await render('index.html', rez));
    },
    '/mnozenje': async (req, res) => {
        let rez = `${Number(req.query.a) * Number(req.query.b)}`;
        res.end(await render('index.html', rez));
    },
    '/delenje': async (req, res) => {
        let rez = `${Number(req.query.a) / Number(req.query.b)}`;
        res.end(await render('index.html', rez));
    }
};

const server = http.createServer((req,res) => {

    let [path, _] = req.url.split('?');

    if (presmetki[path]) {
        const s = url.parse(req.url, true).query;
        req.query = s;
        presmetki[path](req, res);
    } else {
        res.end('');
    }
});

server.listen(8080);
   
   
//     '/plus': async(req,res) => {
//         let fileContent = await fileRead('./index.html');
//         let s = url.parse(req.url, true).query;
//         let rez = `${Number(s.a) + Number(s.b)}`;
          
//         res.end(rez)
//     },

//     '/minus': async(req,res) => {
//         let fileContent = await fileRead('./index.html');
//         let s = url.parse(req.url, true).query;
//         let rez = `${Number(s.a) - Number(s.b)}`;
        
//         res.end(rez);
//     },

//     '/mnozenje': async(req,res) => {
//         let fileContent = await fileRead('./index.html');
//         let s = url.parse(req.url, true).query;
//         let rez = `${Number(s.a) * Number(s.b)}`;
        
//         res.end(rez);
//     },

//     '/delenje': async(req,res) => {
//         let fileContent = await fileRead('./index.html');
//         let s = url.parse(req.url, true).query;
//         let rez = `${Number(s.a) / Number(s.b)}`;
        
//         res.end(rez);
//     }
// };


