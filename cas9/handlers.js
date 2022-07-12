const util = require('./util');
const DATA_SOURCE = './data.txt';

const addStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = null;

        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
        data.push(req.body);
        
        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
        res.send('ok');
    } catch(err) {
        res.send(err);
    }
};

const getAllStudents = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
};

const getOneStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        if(data[req.params.id]) {
            return res.send(data[req.params.id]);
        }
        res.send('not found');
    } catch (err) {
        res.send(err);
    }
};

const updateStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);

        if(data[req.params.id]) {
            data[req.params.id] = req.body;
            await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
            res.send('ok');
        }else {
            res.send('STUDENT NOT FOUND');
        }
    } catch (err) {
        res.send(err);
    }
};

const deleteStudent = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        if(data[req.params.id]) {
            await util.fileWrite(DATA_SOURCE, JSON.stringify(data.filter( student => student != data[req.params.id])));
            res.send('ok');
        }else res.send('not found');
    } catch (err) {
        res.send(err);
    };
   //filter
};

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
};