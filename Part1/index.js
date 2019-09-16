const board = []



function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    clickedElement.innerText = playerSpan.innerText

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
    }

console.log(board)

const topRight = board[2]
const topLeft = board[0]
const topCenter = board[1]
const middleRight = board[5]
const middleLeft = board[3]
const middleCenter = board[4]
const bottomRight = board[8]
const bottomLeft = board[5]
const bottomCenter = board[7]

if(topRight !== undefined && topCenter === topRight && topLeft === topRight){
    alert(`Player ${topRight}, You Won!!!`)
    return
}
if(middleRight !== undefined && middleCenter === middleRight && middleLeft === middleRight){
    alert(`Player ${middleRight}, You Won!!!`)
    return
}
if(bottomRight !== undefined && bottomCenter === bottomRight && bottomLeft === bottomRight){
    alert(`Player ${bottomRight}, You Won!!!`)
    return
}
if(topRight !== undefined && middleRight === topRight && bottomRight === topRight){
    alert(`Player ${topRight}, You Won!!!`)
    return
}
if(topLeft !== undefined && middleLeft === topLeft && bottomLeft === topLeft){
    alert(`Player ${topLeft}, You Won!!!`)
    return
}
if(topCenter !== undefined && middleCenter === topCenter && bottomCenter === topCenter){
    alert(`Player ${topCenter}, You Won!!!`)
    return
}

if(topRight !== undefined && middleCenter === topRight && bottomLeft === topRight){
    alert(`Player ${topRight}, You Won!!!`)
    return
}
if(topLeft !== undefined && middleCenter === topLeft && bottomRight === topLeft){
    alert(`Player ${topLeft}, You Won!!!`)
    return
}

let boardFull = true
for(let i = 0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false
    }
}

if(boardFull === true){
    alert("Cat's Game; there is not winner!")
}


}

console.log("is this working?")