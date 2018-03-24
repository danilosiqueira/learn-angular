var nome = 'danilo siqueira';

function soma(x, y) {
    return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

// Arrow functions
var numeros = [1, 2, 3, 4];
numeros.map(function (valor) {
    return valor * 2;
});

numeros.map(valor => valor * 2); //ES2015

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

// Tipar variavel
var n1: string = 'danilo'; //Aceita somente string
var n2: any = 'danilo'; //Aceita qualquer coisa