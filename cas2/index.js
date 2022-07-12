console.log('hello'); // pecati stringovi(text)
console.log(8888); // pecati broevi (number)
console.log(true); // pecati boolean (true/false)
console.log(['test1', 'test2']); // pecati nizi (array)
console.log({a: 'test1', b: 'test2'}); // pecati objekti

a = 10;
var b = 20;
let c = 30;

const d = 40;
const e = "nekakov string";
const f = false;

//BASE TYPES- string,number and boolean

const student = {
    ime: 'Stefani',
    prezime: 'Nelkovska'
};

student.ime = 'Marija';
console.log(student);

// const student = {
//     ime: 'Petko',
//     prezime: 'Petkovski'
// };      NE MOZE DA SE MENUVA CELIOT OBJEKT ili parametrite vnatre vo objektot, ODNOSNO DA SE KORISTI ISTOTO IME 

// console.log(student);

//COMPLEX TYPES - arrays, objects

const testFn = (o = {}) => {
    o.ime = 'Stefani';
    console.log(o);
};

const s = { ime: 'Petranka', prezime: 'Nelkovska'};
testFn(s);

// console.log(s);

let ucenik = {ime: 'Leo', ocena: 8};
let stu = ucenik;

// console.log(ucenik);
// console.log(stu);

stu.ocena = 6;

console.log(ucenik);

//   VEZBA

const convertTemp = (type, value) => {
    switch (type) {
        case 'ctof':
            return value * 9/5 +32;
        case 'ftoc':
            return (value -32) * 5/9;
        default:
            console.log('Can not convert!!');
            break;
    };
};

const temp = 70;
let result = convertTemp('ctof', temp)

 console.log('Converted result:  ', result); 



