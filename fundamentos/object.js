const prod1 = {};

prod1.nome = "Celular Ultra Mega"; // Adicionando uma chave/valor
prod1.preco = 4998.0;

// Outra maneira de adicionar uma nova chave/valor
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
};

prod2["Desconto Legal"] = 0.4;
console.log(prod2);
