let numbers = document.querySelectorAll(".digit")
let operator = document.querySelectorAll(".operator")
let op = [" + ", " - ", " * ", " / "]
let opCheck = false
let entry = document.querySelector(".entry")
let allClear = document.getElementById("ac")
let clear = document.getElementById("c")
let equal = document.getElementById("equal")

// Adding event listener

allClear.addEventListener("click", () => {
    entry.textContent = ""
    opCheck = false
})

clear.addEventListener("click", () => {

let chechk = entry.textContent.slice(-1)
let newText = entry.textContent.slice(0, -1)

    if (chechk == " ") {
        newText = entry.textContent.slice(0, -3)
        opCheck = false
    }

    entry.textContent = newText
})

numbers.forEach((e, k) => {
    e.addEventListener("click", () => {
        k == 9 ? entry.textContent += 0 : entry.textContent += k + 1
    })

});

operator.forEach((e, k) => {
    e.addEventListener("click", () => {
       if(opCheck == false){
        entry.textContent += op[k]
        opCheck = true
       }
    })

});

equal.addEventListener("click", doing)

// Function

function sum (a,b){
    return  +a + +b
}

function minus (a,b){
    return +a - +b
}

function multiple (a,b){
    return +a * +b
}

function divide (a,b){
    return +a / +b
}

function doing(){

let data = entry.textContent.split(" ")

if(data[1] == "+"){
    entry.textContent =  sum(data[0],data[2])
}
else if(data[1] == "-"){
    entry.textContent =  minus(data[0],data[2])
}
else if(data[1] == "*"){
    entry.textContent =  multiple(data[0],data[2])
}
else if(data[1] == "/"){
    entry.textContent =  divide(data[0],data[2])
}

opCheck = false

}

