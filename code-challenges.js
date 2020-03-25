// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

// this solution is solely intended for this example, i know my l variable 
const sentCap = (arr) =>{
    // mapping through the array of objects, placed v for value and i for index
    arr.map((v,i) => {
        let l = ""
        // if the index is even, assign the letter 'a' to var l, if its odd assign the word 'the' to var l
        if(!(i%2)){
            l ="a "
        } else {
            l = "the "
        }
        // the \b\w reg expression locates the first instance of a char of each word, the second parameter in the replace method replaces that first instance with an uppercase version of it
        console.log(v.name.replace(/\b\w/g, c => c.toUpperCase()) +" is "+ l + v.occupation)
    })
}
sentCap(people)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const rem = arr => {
    let cool = []
    arr.forEach(v => {
        if(typeof v == 'number'){
            cool.push(v%3)
        }
    })
    return cool
}

console.log(rem(testingArray1))
console.log(rem(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noDup = (arr1,arr2) =>{
    let tight = arr1.concat(arr2)
    return  tight.filter((v,i) => tight.indexOf(v) == i)
}
console.log(noDup(testingArray3,testingArray4))