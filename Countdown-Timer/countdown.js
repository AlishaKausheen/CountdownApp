const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const newYears = "1/1/2024";

function countDown() {
    const newYearDate = new Date(newYears)
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    daysEl.textContent = days
    hoursEl.textContent = hours
    minsEl.textContent = minutes
    secondsEl.textContent = seconds
}
console.log(countDown)
countDown();
setInterval(countDown, 1000);