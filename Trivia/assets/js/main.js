//Html elements
let triviaForm = document.getElementById("trivia");
let questionsContainer = document.getElementById("questionsContent");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");
let answers = document.getElementsByClassName("answer");

//variables de control
let questions;
let qIndex = 0;
let correct_index_answer;
let score = 0;

//Functions
let getAPIData = e => {
    e.preventDefault();
    let url = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            questions = data.results;
            startGame();
        });
};

const startGame = () => {
    console.log(questions);
    console.log(`Puntuacion: ${score}`);
    questionsContainer.style.display = "flex";
    triviaForm.style.display = "none";

    //Variable para controlar preguntas una por una
    let currentQestion = questions[qIndex];
    document.getElementById("questionName").innerText = currentQestion.question;
    document.getElementById("question-index").innerText = qIndex + 1;
    document.getElementById("num-questions").innerText = amount.value;
    
    if (currentQestion.type == "boolean") {
        document.getElementById(1).innerText ="True";
        document.getElementById(2).innerText ="False";
        document.getElementById(3).style.display = "none";
        document.getElementById(4).style.display = "none";
        if (currentQestion.correct_answer === "True") correct_index_answer = 1;
        else correct_index_answer = 2;
    } else {
        document.getElementById(1).style.display = "block";
        document.getElementById(2).style.display = "block";
        document.getElementById(3).style.display = "block";
        document.getElementById(4).style.display = "block";

        correct_index_answer = Math.floor(Math.random() * 4) + 1;

        document.getElementById(correct_index_answer).innerText = 
            currentQestion.correct_answer;

        let j = 0;
        for (let i = 1; i <= 4; i++) {
            if (i === correct_index_answer) continue
            document.getElementById(i).innerText = 
                currentQestion.incorrect_answers[j];
            j++;
        }
    }
};

const selectAnswer = id => {
    let answerId = id;
    console.log(answerId);
    console.log(correct_index_answer);
    if (answerId == correct_index_answer) {
        score = score + 1;
        console.log("respuesta correcta");
    } else {
        console.log("respuesta incorrecta");
    }
    if(qIndex < amount.value -1) {
        qIndex++;
        startGame();
    } else if(qIndex === amount.value - 1) {
        showResults(score);
    }    
};

const showResults = () => {
    console.log("juego terminado");
    questionsContainer.innerHTML = ""
    let finalScore = document.createElement("p");
    finalScore.innerText = `Game Over, your final score is: ${score}`;
    let restartBtn = document.createElement("a");
    restartBtn.setAttribute("href", "index.html");
    restartBtn.setAttribute("class", "btnRstr");
    restartBtn.innerHTML = "Play again"
    questionsContainer.appendChild(finalScore);
    questionsContainer.appendChild(restartBtn);
}

//For que recorra los botones

for (let i = 0; i < answers.length; i++) {
    const element = answers[i];
    element.addEventListener("click", () => selectAnswer(element.id));
}

//Listeners
triviaForm.addEventListener("submit", getAPIData);