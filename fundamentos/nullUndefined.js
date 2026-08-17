let valor; // não inicializada
console.log(valor); // retorna undefined (variável existe porém não tem um tipo nem valor)
// console.log(valor2); // retorna o erro ReferenceError: valor2 is not defined (variável não existe)

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // gera o erro TypeError: Cannot read properties of null (reading 'toString')

const produto = {};
console.log(produto.preco); // undefined
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined, prefira null
console.log(!!produto.preco);
