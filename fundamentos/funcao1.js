// funcao sem retorno
function imprimirSOma(a, b) {
  console.log(a + b);
}

imprimirSOma(2, 3);
imprimirSOma(2); // retorna NaN
imprimirSOma(2, 10, 4, 5, 6, 7);
imprimirSOma(); // retorna NaN

// Funcao com retorno

function calculaSoma(a, b = 0) {
  // define um padrão para b caso nenhum parâmetro seja passado para b
  return a + b;
}

let soma = calculaSoma(2, 2);

console.log(soma);

console.log(calculaSoma(3, 5));
