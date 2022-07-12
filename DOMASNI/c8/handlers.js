const fs = require('fs');

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

const studenti = async (req, res) => {
    try {
        await fileWrite("studenti.txt", JSON.stringify(req.body));  
        res.send('OK');
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    studenti
};