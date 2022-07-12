const fs = require('fs');  //filesystem module

fs.writeFile('iminja.txt', 'Stefi,Kiki,Riki', (err) => {
    if(err) {
        console.log('ERROR: ', err);
    }
});

// const fileWrite = () => {
//     return new Promise();
// };

// const fileWrite = () => {
//     return new Promise(() => {

//     });
// };

// const fileWrite = () => {
//     return new Promise((success, fail) => {       //success-uspesno, fail-neuspesno

//     });
// };

// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('iminja.txt', 'Janko, Stanko', (err) => {
//             if (err) {
//                 return fail(err);
//             }
//             return success();
//         });
//     });
// };

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileWrite('oceni.txt', '6, 8, 9, 6, 7, 7, 8, 6, 9, 10')
    .then(() => {
        console.log('УСПЕШНО - SUCCESS!');
        return fileWrite('boi.txt', 'zelena, zolta, rozeva, violetova')
    }) .then(() => {
        console.log('УСПЕШНО - SUCCESS 2!');
        return fileWrite('boi1.txt', 'siva, crna, bela, sina');
    }) .then(() => { 
        console.log('УСПЕШНО - SUCCESS 3!');
    }) .catch(err => {
        console.log(err);
    });

   // then === success
   // catch === fail

const s = async () => {
    try {
        await fileWrite('file1.txt', "FILE ONE - ZDRAVO STEFI!"); // 
        await fileWrite('file2.txt', "FILE TWO - ZDRAVO STEFI!"); // 
        await fileWrite('file3.txt', "FILE THREE - ZDRAVO STEFI!"); // 
    } catch(err) {
        console.log(err);
    }
};

s(); 

const fileRead = (filename) => {
    return new Promise((success, fail) => { // moze namesto success i fail da se sretnat resolve (success) i reject (fail)
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
        let boi = await fileRead('boi.txt');
        console.log('BOI:', boi);
    } catch(err) {
        console.log(err);
    }
})();

let imenik = [
    {ime: 'Stefani Nelkovska', telefon: 7864512},
    {ime: 'Petko Petkovski', telefon: 9865412},
    {ime: 'Mia Miovska', telefon: 8452159}
];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); // se menuva od objekt vo string
        console.log(imenikData);
        await fileWrite('imenik.txt', imenikData);
        let dataString = await fileRead('imenik.txt');
        let data = JSON.parse(dataString); // se menuva od string povtorno vo objekt
        console.log(data);
    } catch(err) {
        console.log(err);
    }
})();