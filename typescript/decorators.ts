// Decorator
// Formas de decorar os elementos na forma de uma notação
// https://www.typescriptlang.org/docs/handbook/decorators.html


// Decorator é basicamente uma função
function logger(target: any) {
  console.log(target); // Function: user
  
}

@logger
class User {
  nome : string;

  constructor(nome: string) {
    this.nome = 'Brabo';
  }
}