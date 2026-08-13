let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// 1 == true
isAtivo = 1;
console.log(Boolean(isAtivo));

console.log(!!isAtivo); // negação duas vezes, tipo not not

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "";
console.log(nome || "Desconhecido"); // definindo um valor padrão
