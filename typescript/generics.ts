// generics <...> - Permitem a passagem de tipos

// Usado quando durante o desenvolvimento, qual tipo o argumento e 
// o retorno de uma função devem receber? Para isso utilizamos os Generics.

// https://www.typescriptlang.org/docs/handbook/generics.html

function printUsers(param: number | string | object ) {
  console.log(param);
}

printUsers(10)


// function nameFunction<informar os dados>(...) {...}
// A letra dentro dos <...> simboliza que estamos recebendo um paramentro pelo usuário
function printFilmes<F>(param: F) {
  console.log(param);
}

printFilmes<string>('text')
printFilmes<number>(21)


// Nomeclaturas  - padrões dos generics
  // <T> - para receber um tipo
  // <S> - para receber um state
  // <K> - para receber uma Key
  // <V> - para receber um value
  // <P> - para receber um parametro
  // <R> - para receber um retorno
  // <E> - para receber um erro
  // <O> - para receber um objeto

