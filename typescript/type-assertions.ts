// Afirmações de Tipo - forçar o nosso tipo de dados para ser um determinado tipo
// Type Assertion - as

const unk: unknown = '';
const str: string = unk as string;


interface User {
    name: string;
    address: {
        street: string;
    };
}

// const userView: User = {} as User;

// Algle brackets
const userView: User = <User>{};