const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server test');
    console.log(req);
    console.log(req.url);
    console.log(req.method);

    res.end('zdravo od serverot');
});

server.listen(8080);

/*
IP address - 192.168.1.20 - adresa na internet host (pc povrzan na internet ima ip adresa), sekoj pc ima unikatna adresa(fakticki tocno)
0.0.0.0 - 255.255.255.255 // A, B, C, D  //  
Mojot PC nema unikatna IP Adresa, ruterot doma ima unikatna ip adresa

PROVIDER ---->---- ROUTER --->---- COMPUTER
                          NAT
NAT - Network Address Translation                         

provajderot mu dava IP adresa na ruterot, a ruterot im dava ip adresi na uredite sto se povrzani na toj ruter

port 80 e HTTP
Port 443 e HTTPS

wikipedia.org работи на default порт 80 и 443

http://wikipedia.org
https://wikipedia.org

локален сервис (сервер) работи на нестандардна порта 10000 ili vo nasiot slucaj (8080)
http://localhost:10000


default ports
- web server application 80, 443
- ftp server application: 21
- ssh server application: 22
- smtp server application: 25
- proxy server application: 8080
- ...

server - компјутер поврзан на интернет
server application / service - апликација која е поставена на server (и работи на сопствена порта)

req - request - baranje ili povik od klientot kon serverot
res - response - odgovorot sto serverot go dava na klientot 

*/

