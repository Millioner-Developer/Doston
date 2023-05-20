const display = document.querySelector(".title")
const box = document.querySelector(".box")

let count = 0

function plus() {
    count++
    display.innerHTML = count
}

function reset() {
    count = 0
    display.innerHTML = count
}

function white() {
    box.style.backgroundColor = "#fff"
}

function black() {
    box.style.backgroundColor = "#222"
}

function green() {
    box.style.backgroundColor = "#0f0"
}

function red() {
    box.style.backgroundColor = "#f00"
}