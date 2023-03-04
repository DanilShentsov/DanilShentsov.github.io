// // DECLARATION
// function scream() {
//     alert('AAAAA')
//     return "I'm OK"
// }
// // EXPRESSION
// const wowScream = function() {
//     alert('WoooooooW')
// }
// // ARROW
// const arrow = () => {
//     alert('arrow in the sky')
// }
// scream()
// wowScream()
// arrow()

// ИГРА

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * ((max-min)+min)).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess 
}

const gameElements = document.getElementById('game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}
btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = 'Игра началась!'
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        gameState.taskInProcess = true
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = 'Начать заново'
        gameState.taskInProcess = false 
    }
}

// console.dir(document)
// const chooseID = document.querySelector(".game")
const chooseID = document.querySelectorAll(".choose_block_container > div")
// const anyValue = document.getElementById.children
const counterID = document.querySelector('.choose_block span')

const chooseState = {
    CountsElements: 0,
}
const changeCount = (value) => {
    chooseState.CountsElements += value
    counterID.innerText = chooseState.CountsElements
}

for (let i = 0; i < chooseID.length; i++) {
    chooseID[i].addEventListener("click", (e) => {
        // chooseID[i].className = "choose_element"
        // e.target.className = "choose_element"
        if (e.target.className === "") {
            e.target.className = "choose_element"
            changeCount(1)
        } else {
            e.target.className = ""
            changeCount(-1)
        }
    })
}