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

(async () => {
    try {
        let dataString = await fileRead('studenti.json');
        let studenti = JSON.parse(dataString);
        console.log(studenti);

        let sortByProsek = [...studenti.sort((a, b) => {
            if(a.prosek > b.prosek) {
                return -1;
            } else if(a.prosek < b.prosek) {
                return 1;
            }
            return 0;
        })];

        let sortByIme = [...studenti.sort((a, b) => {
            if (a.ime < b.ime) {
                return -1;
            } else if (a.ime > b.ime) {
                return 1;
            }
            return 0;
        })];

        let najvisokProsek = sortByProsek[0];
        let najnizokProsek = sortByProsek[sortByProsek.length - 1];

        let sredenProsek = studenti.reduce((prev, cur) => {
            return cur.prosek + prev;
        }, 0);

        let cities = {};

        for(let s of studenti) {
            if(!cities[s.grad]) {
                cities[s.grad] = s.prosek;
            }
            cities[s.grad] = (cities[s.grad] + s.prosek) / 2;
        }

        let citiesArray = [];

        for(let c in cities) {
            citiesArray.push({
                grad: c,
                prosek: cities[c]
            });
        }

        citiesArray.sort((a, b) => {
            if(a.prosek > b.prosek) {
                return -1;
            } else if(a.prosek < b.prosek) {
                return 1;
            }
            return 0;
        });

        console.log(sortByProsek);
        console.log(sortByIme);
        console.log(najvisokProsek);
        console.log(najnizokProsek);
        console.log(sredenProsek / studenti.length);
        console.log(citiesArray);
        console.log(citiesArray[0]);
        console.log(citiesArray[citiesArray.length - 1]); 
           
    } catch(err) {
        console.log(err);
    };
}) ();
