{
  {
    {
      {
        var sera = "Será???"; // esta variável pode ser acessada de qualquer lugar, inclusive de dentro de outras funções
      }
    }
  }
}

console.log(sera);

function teste() {
  var local = 123; // esta variável está apenas dentro do escopo da função e não pode ser acessada de fora deste escopo
  console.log(local);
}

teste();

// console.log(local); // Dá o erro: ReferenceError: local is not defined

function dizer_sera() {
  console.log(sera); // acessa uma variável que está fora do escopo da função
}

dizer_sera();
