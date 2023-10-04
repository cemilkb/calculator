let numbers = document.querySelectorAll(".digit")
let operator = document.querySelectorAll(".operator")
let op = [" + ", " - ", " * ", " / "]
let opCheck = false
let entry = document.querySelector(".entry")
let allClear = document.getElementById("ac")
let clear = document.getElementById("Backspace")
let equal = document.getElementById("Enter")
let dot = document.getElementById(".")
let dotCheck = false
let audio = document.querySelector("audio")

// Adding event listener

allClear.addEventListener("click", () => {
    entry.textContent = ""
    opCheck = false
    audio.currentTime = 0
    audio.play()
})

clear.addEventListener("click", clearFunction)

numbers.forEach((e, k) => {
    e.addEventListener("click", () => {
        k == 9 ? entry.textContent += 0 : entry.textContent += k + 1
        audio.currentTime = 0
        audio.play()
    })

});

operator.forEach((e, k) => {
    e.addEventListener("click", () => {
        if (opCheck == false) {
            entry.textContent += op[k]
            opCheck = true
            dotCheck = false
        }
        audio.currentTime = 0
        audio.play()
    })

});

equal.addEventListener("click", doing)

dot.addEventListener("click", () => {
    if (dotCheck == false) {
        entry.textContent += "."
    }
    dotCheck = true
    audio.currentTime = 0
    audio.play()
})

// Function

function clearFunction() {

    let chechk = entry.textContent.slice(-1)
    let newText = entry.textContent.slice(0, -1)

    if (chechk == " ") {
        newText = entry.textContent.slice(0, -3)
        opCheck = false
        let look = entry.textContent
        if (look.includes(".")) {
            dotCheck = true
        }
    }
    else if (chechk == ".") {
        dotCheck = false
    }
    audio.currentTime = 0
    audio.play()
    entry.textContent = newText
}

function sum(a, b) {
    return +a + +b
}

function minus(a, b) {
    return +a - +b
}

function multiple(a, b) {
    return +a * +b
}

function divide(a, b) {
    return +a / +b
}

function doing() {

    let data = entry.textContent.split(" ")

    if (data[1] == "+") {
        entry.textContent = sum(data[0], data[2])
    }
    else if (data[1] == "-") {
        entry.textContent = minus(data[0], data[2])
    }
    else if (data[1] == "*") {
        entry.textContent = multiple(data[0], data[2])
    }
    else if (data[1] == "/") {
        entry.textContent = divide(data[0], data[2])
    }

    opCheck = false
    audio.currentTime = 0
    audio.play()
}

function removeTransitionDigit(e) {
    this.classList.remove("digitA")
}

function removeTransitionOperator(e) {
    this.classList.remove("operatorA")
}

function removeTransitionOthers(e) {
    this.classList.remove("othersA")
}
function removeTransitionDelete(e) {
    this.classList.remove("deleteA")
}

// Keyboard atachment

window.addEventListener("keydown", (e) => {
    if (e.key >= 0 || e.key == "." || e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" ||
        e.key == "Backspace" || e.key == "Enter") {
        if (e.key == "." && dotCheck == false) {
            dotCheck = true
            entry.textContent += e.key
        } else if (e.key != "." && e.key != "Enter" && e.key != "Backspace" &&
            e.key != "+" && e.key != "-" && e.key != "*" && e.key != "/") {
            entry.textContent += e.key
        } else if (e.key == "Enter") {
            doing()
        } else if (e.key == "Backspace") {
            clearFunction()
        } else if (opCheck == false) {
            if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
                opCheck = true
                entry.textContent += ` ${e.key} `
                dotCheck = false
            }
        }

        audio.currentTime = 0
        audio.play()
    }

    let deneme = document.querySelector(`div[id="${e.key}"]`)

    if (deneme.textContent >= 0) {
        deneme.classList.add("digitA")
    } else if (deneme.textContent == "*" || deneme.textContent == "+" || deneme.textContent == "-" || deneme.textContent == "/") {
        deneme.classList.add("operatorA")
    } else if (deneme.textContent == "." || deneme.textContent == "=") {
        deneme.classList.add("othersA")
    } else if (deneme.textContent == "C") {
        deneme.classList.add("deleteA")
    }


})


// Remove Claslist

numbers.forEach((choosen) => { choosen.addEventListener("transitionend", removeTransitionDigit) })
operator.forEach((choosen) => { choosen.addEventListener("transitionend", removeTransitionOperator) })
dot.addEventListener("transitionend", removeTransitionOthers)
equal.addEventListener("transitionend", removeTransitionOthers)
clear.addEventListener("transitionend", removeTransitionDelete)

// Dark Mode

let body = document.querySelector("body")
let footer = document.querySelector("footer")
let box = document.querySelector(".box")
let screen = document.querySelector(".screen")
let modButton = document.getElementById("mode-button")
let mode = 0

modButton.addEventListener("click", () => {
    if(mode == 0){
        mode = 1
        modButton.classList.remove("light-mode")
        modButton.classList.add("dark-mode")
        modButton.textContent = "Dark Mode: ON"

        body.style.backgroundImage = "url(black2.jpg)"
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
        
        
        box.style.backgroundImage = "url(kullan.jpg)"
        screen.style.backgroundColor = "rgb(75, 0, 128)"
        
        entry.style.color = "white"

    }else if (mode == 1){
        mode = 0
        modButton.classList.add("light-mode")
        modButton.classList.remove("dark-mode")
        modButton.textContent = "Dark Mode: OFF"

        body.style.backgroundImage = "url(kullan.jpg)"
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"
        
        
        box.style.backgroundImage = "url(black2.jpg)"
        screen.style.backgroundColor = "white"
        
        entry.style.color = "rgb(75, 0, 128)"

    }
    console.log(mode)
})


