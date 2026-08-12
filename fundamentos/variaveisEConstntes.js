// DIFERENÇA ENTRE VAR E LET

var a = 3;
let b = 4;

var a = 30; // O javascript permite definir a variável novamente dentro do mesmo código e o let não permite
// let b = 40 // este código gera um erro
b = 40; // assim não tem problema

console.log(a, b);

a = 300; // de qualquer forma a maneira normal de redefinir uma variável é não utilizar as palavras var e let novamente
b = 400;

console.log(a, b);

const c = 5;
// c = 50; // obviamente uma constante não pode ser alterada

console.log(c);
