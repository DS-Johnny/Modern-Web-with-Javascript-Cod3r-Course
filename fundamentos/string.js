const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna a letra na posição 4
console.log(escola.charAt(5)); // NÃO GERA ERRO

console.log(escola.charCodeAt(3)); // retorna o unicode

console.log(escola.indexOf("3")); // retorna o índice do primeiro caractere encontrado

console.log(escola.substring(1)); // retorna a string a partir da posição indicada
console.log(escola.substring(0, 3)); // retorna a string com início e "range" 3, não retorna o caractere na posição 3.

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");

//replace
console.log(escola.replace(3, "e"));

// SPLIT
console.log("Ana,Maria,Pedro".split(","));
