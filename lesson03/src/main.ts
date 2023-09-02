let stringArr = ['one', 'hey', 'Dave']    // typescript IntelliSense deside array type ::: let stringArr: string[]

let guitars = ['Strat', 'Les Paul', 5150] // typescript IntelliSense ::: let guitars: (string | number)[]

let mixedData = ['EVH', 1984, true]     // typescript IntelliSense ::: let mixedData: (string | number | boolean)[]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

// stringArr = guitars     
// // // // Type '(string | number)[]' is not assignable to type 'string[]'. Type 'string | number' is not assignable to type 'string'.   Type 'number' is not assignable to type 'string'.
guitars = stringArr
mixedData = guitars
// guitars = mixedData         
// // // // Type '(string | number | boolean)[]' is not assignable to type '(string | number)[]'. Type 'string | number | boolean' is not assignable to type 'string | number'.   Type 'boolean' is not assignable to type 'string | number'.


let test = []
let bands: string[] = []
bands.push('Van Halen')
// bands.push(15)

 
// Tuple      
// // // // tupil is more strict than an Array. 
let myTuple: [string, number, boolean] = ['Dave', 42, true]  // // // // let myTuple: [string, number, boolean]

let mixed = ['John', 1, false]     // // // // let mixed: (string | number | boolean)[]

myTuple[1] = 42
// console.log(myTuple) 
// myTuple.push('John')         // // // // tupils accepts push, pop, shift, unshift other methods
// console.log(myTuple) 
mixed = myTuple
// myTuple = mixed              // // // // check this type error



 
// Objects -------------------------------------------------------------------------------------
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {        // // // // TypeScript infer data type.
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'

// type Guitarist = { 
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }


interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}




const greetGuitarist = (guitarist: Guitarist) => {     // // // // TypeScript "infer" function return data type.
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)