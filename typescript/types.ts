// Tipos Primitivos
const message: string = 'Brabo 🔥' // String
const possuiFaculdade: boolean = true || false // Boolean
const idade: number = 21 // Number
const peso: number = 72.2 // Number Float

// Arrays
const filmes:  string[] = [ 'Star Wars', 'Star Trek', 'Star Wars']
const idades: number[] = [21, 22, 23]
const frutas: Array<string> = ['Maçã', 'Abacaxi', 'Melancia']

// Tuplas Primitivos
const user: [string, number] = ['Brabo', 21] 

// enums - objeto que vai salvar dados 
enum Theme {
  Dark = '#111',
  Light = '#fff',
}

// any - qualquer tipo, não tem tipo definido
const any: any = 'Brabo'

// Unkown - quando não tem tipo definido
const unkown: unknown = 'Brabo' || 21 || Boolean(true || false)

// Tipo Undefined
let test = undefined // Não e necessário declarar o tipo, não existe um tipo

// Tipo Null 
let testNull = null // Não existe valor para o tipo null

// Type Object - é um tipo de dados que não tem tipo definido
let testObject: Object = {
  id: 1,
  name: 'Brabo',
  age: 21,
}




