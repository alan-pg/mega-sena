const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const btnsortear = document.getElementById("sortear")

let numbers = []

btnsortear.addEventListener("click", sortear);

function numAleatorio() {
    const num = Math.floor(Math.random() * 60 + 1);
    if (numbers.includes(num)) return numAleatorio();
    return num;
}

function sortear() {
    numbers = []
    let n1 = setInterval(dezena1, 110)
    let n2 = setInterval(dezena2, 110)
    let n3 = setInterval(dezena3, 110)
    let n4 = setInterval(dezena4, 110)
    let n5 = setInterval(dezena5, 110)
    let n6 = setInterval(dezena6, 110)

    setTimeout(() => {
        clearInterval(n1)
        numbers.push(Number(num1.innerText))
    }, 2000);
    setTimeout(() => {
        clearInterval(n2)
        numbers.push(Number(num2.innerText))
    }, 4123);
    setTimeout(() => {
        clearInterval(n3)
        numbers.push(Number(num3.innerText))
    }, 6712);
    setTimeout(() => {
        clearInterval(n4)
        numbers.push(Number(num4.innerText))
    }, 8399);
    setTimeout(() => {
        clearInterval(n5)
        numbers.push(Number(num5.innerText))
    }, 10755);
    setTimeout(() => {
        clearInterval(n6)
        numbers.push(Number(num6.innerText))
    }, 12310);
}

function dezena1() {
    num1.innerHTML = numAleatorio()
}
function dezena2() {
    num2.innerHTML = numAleatorio()
}
function dezena3() {
    num3.innerHTML = numAleatorio()
}
function dezena4() {
    num4.innerHTML = numAleatorio()
}
function dezena5() {
    num5.innerHTML = numAleatorio()
}
function dezena6() {
    num6.innerHTML = numAleatorio()
}
