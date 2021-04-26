// function doubleIt(num) {
//     return num * 2
// }

// const doubleIt = function myFun(num) {
//     return num * 2
// }

const doubleIt = num => num * 2

const add = (x = 0, y = 0) => x + y

const doMath = (x, y) => {
    const sum = x + y
    const diff = x - y
    const result = sum * diff
    return result
}

const give5 = () => 5 //without parameter

const result = add(50)
const result3 = doMath(7, 5)
console.log(result3)