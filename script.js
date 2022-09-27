const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const info = document.getElementById('info');
const userTotal = document.querySelector('.user-total h5')
const computerTotal = document.querySelector('.computer-total h5')
const refresh = document.querySelector('.refresh h5')
const user = document.querySelectorAll('.user ul li img');
const imgComputer = document.querySelector('.computer img');

function getComputer() {
    let comp = Math.random()

    if (comp <= .2) return 'rock'
    if (comp > .2 && comp <= .4) return 'paper'
    if (comp > .4 && comp <= .6) return 'scissors'
    if (comp > .6 && comp <= .8) return 'rock'
    if (comp > .8 && comp <= .9) return 'paper'
    if (comp > .9 && comp <= 1) return 'scissors'
}

function getResult(user, comp){
    if (user == comp) return 'DRAW';
    if (user == 'rock') return comp == 'scissors' ? 'WIN' : 'LOSE';
    if (user == 'paper') return comp == 'rock' ? 'WIN' : 'LOSE';
    if (user == 'scissors') return comp == 'paper' ? 'WIN' : 'LOSE';
}

function spin(){
    const imgComputer = document.querySelector('.computer img')
    const images = ['rock', 'paper', 'scissors'];
    let i = 0;
    const start = new Date().getTime();
    
    setInterval(function(){
        if (new Date().getTime() - start > 800) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + images[i++] + '.png')
        if (i == images.length) i = 0;

    }, 50)
}

let userScore = 0;
let computerScore = 0;

refresh.addEventListener('click', function(){
    computerScore = 0
    userScore = 0
    computerTotal.innerHTML = computerScore
    userTotal.innerHTML = userScore
    info.innerHTML = 'CHOOSE'
    info.style.color = "black"
})


user.forEach(function(u){  
    u.addEventListener('click', function(){
        const computerChoice = getComputer();
        const userChoice = u.className;
        const result = getResult(userChoice, computerChoice);
    
        spin();
        
        setTimeout(function(){
            
            imgComputer.setAttribute('src', 'img/' + computerChoice + '.png');    

            if (result == 'DRAW') {
                info.innerHTML = "DRAW"
                info.style.color = 'blue';
            } else if (result == 'LOSE') {
                info.innerHTML = "YOU LOSE"
                info.style.color = 'red';
                computerScore += 1;
                computerTotal.innerHTML = computerScore
            } else {
                info.innerHTML = "YOU WIN"
                info.style.color = 'GREEN';
                userScore += 1;
                userTotal.innerHTML = userScore
            }
            
        }, 800)
        
    })
})
