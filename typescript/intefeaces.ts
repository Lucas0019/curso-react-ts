// Interfaces em typescript
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// https://www.notion.so/lucas0019/Doc-s-Typescript-a0d4be0f0231454c8eb0e2191a5d8b46

//Type Object - Any dos object
const obj: Object = { }


// Add um tipo para objeto - interface sempre com letra maiscula
interface User {
    name: string;
    // [Key: string]: string; // Campo dinamico
    ageNoOptional?: boolean
}

function print(user: User) {
    console.log(user.name); // print 'Lucas'
}

