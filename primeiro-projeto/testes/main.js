var nome = 'danilo siqueira';
function soma(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
// Arrow functions
var numeros = [1, 2, 3, 4];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Tipar variavel
var n1 = 'danilo'; //Aceita somente string
var n2 = 'danilo'; //Aceita qualquer coisa
