// DIVISÃO POR ZERO, o JavaScript não gera erro ao dividir um número por zero como em outras linguagens, ele retorna o tipoe Infinity
console.log(7 / 0);

let inf = 7 / 0;
console.log(typeof inf);

console.log(typeof Infinity);

// é possível calcular string com números
console.log("10" / 2);
console.log("Show" * 2);
console.log(0.1 + 0.7); // imprecisão de float, especificação IEEE, é normal

// o atributo .toString() só funciona com objetos e não com literais

// console.log(10.toString()) // dá erro

// mas é possível se você utilizar parênteses

console.log((10).toString());
