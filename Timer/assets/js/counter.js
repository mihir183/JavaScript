let count = 0
var interval
document.querySelector("#start").addEventListener('click', () => {
    interval = setInterval(() => {
        count++
        document.querySelector("#res").innerHTML = count
    }, 1000)
})
document.querySelector("#stop").addEventListener('click', () => {
    clearInterval(interval)
})
document.querySelector("#restart").addEventListener('click', () => {
    // clearInterval(interval)
    count = 0
    document.querySelector("#res").innerHTML = count
})
document.querySelector("#clear").addEventListener('click', () => {
    clearInterval(interval)
    count = 0
    document.querySelector("#res").innerHTML = count
})