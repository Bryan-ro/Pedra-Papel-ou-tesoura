let rock = document.getElementById('rock')
let scissors = document.getElementById('scissors')
let paper = document.getElementById('paper')
let options = document.querySelectorAll('.choiceObjects')
let player = document.querySelector('.player')
let computer = document.querySelector('.computer')
let computerClass = 'computer playScreen'
let jogadorClass = 'player playScreen'



let computerPlay, playerPlay;

function random() {
    computerPlay = Math.ceil(Math.random() * 3)
    return computerPlay
}

rock.addEventListener('click', () => {
    playerPlay = 1
    player.className = `${jogadorClass} rock`
})

scissors.addEventListener('click', () => {
    playerPlay = 2
    player.className = `${jogadorClass} tesoura`
})

paper.addEventListener('click', () => {
    playerPlay = 3
    player.className = `${jogadorClass} paper`
})

let vencedor = document.querySelector('.vencedor')

options.forEach((objetos) => {
    
    objetos.addEventListener('click', () =>{
        random()
        if(playerPlay == computerPlay) {
            vencedor.className = 'vencedor empate'
            vencedor.innerHTML = 'A partida empatou'
        } else if(playerPlay == 1 && computerPlay == 2) {
            vencedor.className = 'vencedor win'
            vencedor.innerHTML = 'Você venceu'
        } else if (playerPlay == 2 && computerPlay == 3) {
            vencedor.className = 'vencedor win'
            vencedor.innerHTML = 'Você venceu'
        } else if (playerPlay == 3 && computerPlay == 1) {
            vencedor.className = 'vencedor win'
            vencedor.innerHTML = 'Você venceu'
        } else {
            vencedor.className = 'vencedor lose'
            vencedor.innerHTML = 'Você perdeu!'
        }

        switch(computerPlay) {
            case 1:
                computer.className = `${computerClass} rock`
                break
            case 2:
                computer.className = `${computerClass} tesoura`
                break
            case 3:
                computer.className = `${computerClass} paper`
        }
    })
})

