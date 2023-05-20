const second = document.querySelector("#second")
const minute = document.querySelector("#minute")
const hour = document.querySelector("#hour")

setInterval(() => {
    let date = new Date()
    let sec = date.getSeconds() * 6
    let min = date.getMinutes() * 6
    let hr = date.getHours() * 30
    console.log( hr );

    second.style.transform = "rotate(" + sec + "deg)"
    minute.style.transform = "rotate(" + min + "deg)"
    hour.style.transform = "rotate(" + hr + "deg)"
}, 1000);