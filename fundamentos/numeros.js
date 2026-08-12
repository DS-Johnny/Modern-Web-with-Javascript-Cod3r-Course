const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // 1.0 é inteiro, 1.1 não é

const avaliacao1 = 9.234;
const avaliacao2 = 5.42342;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// passar a quantidade de casas decimais que você quer formatar, não atribui a formatação à variável, apenas exibe formatada
console.log(media.toFixed(2));
console.log(media.toString());

const mediaFormatada1 = media.toFixed(2);
const mediaFormatada2 = media.toString();

console.log(`Media formatada1 (duas casas decimais): ${mediaFormatada1}`);
console.log(`Media formatada2 (como string): ${typeof mediaFormatada2}`);

// Mostrando o número em binário
console.log(`Media formatada como string e valor binário ${media.toString(2)}`);

// number com 'n' minúsculo é o tipo do dado, Number com 'N' maiúsculo é a função
console.log(typeof media);
console.log(typeof Number);
