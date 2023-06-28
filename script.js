const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const info = document.getElementById('info');
const userTotal = document.querySelector('.user-total p')
const computerTotal = document.querySelector('.computer-total p')
const user = document.querySelectorAll('.user-hand button');
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

function getComputerImage(computer){
    if (computer === "paper") return "computerPaper"
    if (computer === "scissors") return "computerScissors"
    if (computer === "rock") return "computerRock"
}

function getUserImage(user){
    if (user === "paper") return "userPaper"
    if (user === "scissors") return "userScissors"
    if (user === "rock") return "userRock"
}

function getResult(user, comp){
    console.log(user + " " + comp)
    if (user == comp) return 'DRAW';
    if (user == 'rock') return comp == 'scissors' ? 'WIN' : 'LOSE';
    if (user == 'paper') return comp == 'rock' ? 'WIN' : 'LOSE';
    if (user == 'scissors') return comp == 'paper' ? 'WIN' : 'LOSE';
}

function computerSpin(){
    const imgComputer = document.querySelector('.computer img')
    const images = ['computerPaper', 'computerRock', 'computerScissors'];
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

function userSpin(userImage){
    const imgComputer = document.querySelector('.user img')
    const images = ['userRock', 'userPaper', 'userScissors'];
    let i = 0;
    const start = new Date().getTime();
    
    setInterval(function(){
        if (new Date().getTime() - start > 800) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + images[i++] + '.png')
        if (i == images.length) i = 0;
        
    }, 100)
    setTimeout(() => {
        imgComputer.setAttribute('src', 'img/' + userImage + '.png')
    }, 801);
}

let userScore = 0;
let computerScore = 0;

user.forEach(function(u){  
    u.addEventListener('click', function(){
        const computerChoice = getComputer();
        const userChoice = u.id;
        const result = getResult(userChoice, computerChoice);
        const computerImage = getComputerImage(computerChoice)
        const userImage = getUserImage(userChoice)
        console.log(userImage)
    
        computerSpin();
        userSpin(userImage);
        
        setTimeout(function(){
            imgComputer.setAttribute('src', 'img/' + computerImage + '.png');    
            if (result == 'DRAW') {
                info.innerHTML = "DRAW"
                info.style.color = "white"
            } else if (result == 'LOSE') {
                info.innerHTML = "LOSE"
                info.style.color = "red"
                computerScore += 1;
                computerTotal.innerHTML = computerScore
            } else {
                info.innerHTML = "WIN"
                info.style.color = "#03C04A"
                userScore += 1;
                userTotal.innerHTML = userScore
            }
        }, 800)     
    })
})
