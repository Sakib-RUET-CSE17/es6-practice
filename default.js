function add() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
    }
    return sum
}



console.log(add(1, 12, 3, 4, 1))

function add(num1=0,num2=0){
    
}