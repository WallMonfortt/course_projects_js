let randomNumber1 = randomNum();
let randomNumber2 = randomNum();
 


function randomNum() {
    return Math.floor(Math.random() * 6) + 1;

}

const imagePath = './images/dice'

document.querySelector('.img1').setAttribute("src", `${imagePath}${randomNumber1}.png`)
document.querySelector('.img2').setAttribute("src", `${imagePath}${randomNumber2}.png`)

let text = "Draw game"
if (randomNumber1 > randomNumber2) {
   text = "🚩Player 1 Wins"
    
} else if (randomNumber1 < randomNumber2) {
    text = "Player 2 Wins 🚩"

}

document.querySelector('h1').textContent = text;