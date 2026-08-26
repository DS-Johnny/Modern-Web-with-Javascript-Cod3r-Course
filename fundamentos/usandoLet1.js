var numero = 1;
{
  let numero = 2;
  console.log("dentro=", numero); // apenas escopo de dentro da função
}
console.log("fora =", numero); // apenas escopo de fora da função
