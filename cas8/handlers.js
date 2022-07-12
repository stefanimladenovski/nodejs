const home = (req, res) => {
    res.send('OK HOME');
}; 


const calculator = (req,res) => {
    // console.log(req.query)
    let result;
//console.log(req.params.operation);  //go pecati url parametarot sto go pisuvame (operation) 
 
//se sto e so : e vo params i kolku segmenti imame so : tokku mora da staime vo urlto  

switch (req.params.operation) {
        case 'plus':
            result = Number(req.query.a) + Number(req.query.b)
            break;
        case 'minus':
            result = Number(req.query.a) - Number(req.query.b)
            break;
        case 'mnozenje':
            result = Number(req.query.a) * Number(req.query.b)
            break;
        case 'delenje':
            result = Number(req.query.a) / Number(req.query.b)
            break;
        default:
            result = 0;
    }
    res.send(result.toString());
};  // nova ruta 

const calculator2 = (req, res) => {
    //console.log(req.body); //gi ima JSON podatocite od JSON podatoci isprateni od klientska strana
    let result;
    switch (req.params.operation) {
        case 'plus':
            result = Number(req.body.a) + Number(req.body.b)
            break;
        case 'minus':
            result = Number(req.body.a) - Number(req.body.b)
            break;
        case 'mnozenje':
            result = Number(req.body.a) * Number(req.body.b)
            break;
        case 'delenje':
            result = Number(req.bodyy.a) / Number(req.body.b)
            break;
        default:
            result = 0;
    }
    res.send(result.toString());
}

module.exports = {
    home,
    calculator,
    calculator2
};