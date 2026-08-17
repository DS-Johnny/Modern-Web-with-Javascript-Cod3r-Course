const valores = [1.2, 12.3, 3.4, 5.6];
console.log(valores[0], valores[3]);
console.log(valores[4]); // output: undefined. Não retorna o erro "Index out of range" como em outras linguagens

valores[4] = 10; // Permite adicionar um valor ao índice 4.

console.log(valores);

valores[9] = 9; // adiciona um valor ao índice 9 mesmo com os índices 5, 6, 7 e 8 não existindo.
console.log(valores); // Output: [ 1.2, 12.3, 3.4, 5.6, 10, <4 empty items>, 9 ]

console.log(valores[5]); // undefined

// Tamanho do array
console.log(valores.length); // os itens vazios também contam.

valores.push({ id: 3 }, false, null, Infinity, "teste"); // adiciona itens ao final do array

console.log(valores);
console.log(valores.length);

let ultimoItem = valores.pop();
console.log(`
    O último item removido foi: ${ultimoItem}
    Agora o array está assim: ${valores}
    `);

// outra forma de remover item do array
delete valores[0];
console.log(valores);

console.log(typeof valores);
