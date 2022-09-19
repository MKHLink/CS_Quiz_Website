//This holds all the quiz data
var quizEl=[
    {
        question:"What is the keyword to declare a variable?",
        choice:["Var","Is","Declare","int"],
        correct:"Var"
    },
    {
        question:"What data structure can be used to store multiple items under the same variable?",
        choice:["DataLine","LinkedData","Array","CArray"],
        correct:"Array"
    },
    {
        question:"What keyword can we use to cast a string as an Int?",
        choice:["intyfy","parseInt()","toInt()","mkInt"],
        correct:"parseInt()"
    },
    {
        question:"What loop is used to go through the contents on an array?",
        choice:["while","looping","round.robin()","for()"],
        correct:"for()"
    },
    {
        question:"Which is the correct way to reference data in an object?",
        choice:["obj.data","data.obj","obj()","data[]obj"],
        correct:"obj.data"
    },
    {
        question:"Which is the correct way to increment i by 1?",
        choice:["i+=1","i++","Both of the above","None of the above"],
        correct:"Both of the above"
    },
    {
        question:"What is the keyword used to create a method?",
        choice:["method","function","makeFunction","keyword"],
        correct:"function"
    },
    {
        question:"What symbol is used to show the end of a code block?",
        choice:["}",";","@","#"],
        correct:";"
    },
    {
        question:"What keywork is used to halt a switch",
        choice:["halt","break","stop","noMore"],
        correct:"break"
    },
    {
        question:"What does || mean?",
        choice:["And","OR","IS","highWay"],
        correct:"OR"
    }
];

//variables and selectors
var headerEl = document.querySelector("#header");
var quizFormEl = document.querySelector("#quiz-start");
var buttonContainer = document.querySelector("#btn-container")
var indexEl = 0;
var scoreEl = 0;
var timeleft = 15;

//This are all the answer buttons to be displayed in the page
var button1 = document.getElementById("0");
var button2 = document.getElementById("1");
var button3 = document.getElementById("2");
var button4 = document.getElementById("3");
var correct = false;
var timeUp = false;

//The start button, gets hidden upon click and makes the other buttons appear
var startbtn = document.getElementById("btn");
startbtn.onclick=function(){
    timer(timeleft);
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn-container").style.display = "block";
    var message = document.createElement("h5");
    message.textContent = "Each correct asnwer adds time to the timer!";
    headerEl.appendChild(message);
};

//Listens for any event changes
quizFormEl.addEventListener("submit",showQuiz);

//Displayes all the quiz data in page and also listens to the answer button clicks
function showQuiz(event)
{
    event.preventDefault();
    

    if(indexEl<10 && !timeUp)
    {
        quizDisplay(quizEl,indexEl);
        
        //check each button for scoring
        button1.onclick=function(){
        if(quizEl[indexEl-1].correct===button1.textContent)
        {
            correct = true;
            scoreEl=scoreEl+1;
        }
        };

        button2.onclick=function(){
        if(quizEl[indexEl-1].correct==button2.textContent)
            {
                correct = true;
                scoreEl=scoreEl+1;
            }
        };

        button3.onclick=function(){
            if(quizEl[indexEl-1].correct==button3.textContent)
                {
                    correct = true;
                    scoreEl=scoreEl+1;
                }
            };

        button4.onclick=function(){
            if(quizEl[indexEl-1].correct==button4.textContent)
                {
                    correct = true;
                    scoreEl=scoreEl+1;
                }
            };
    }
    else
    {
        console.log(scoreEl);
        window.alert("Your Score is: "+scoreEl);
        var name = window.prompt("Enter Your Initials to save score");
        loadScore(name,scoreEl);
    
    }

    indexEl++;
}

//Appends quizEl data to HTML
function quizDisplay(quiz,index)
{
    var question = document.getElementById("question");
    question.textContent= quiz[index].question;
    buttonContainer.appendChild(question);
    quizFormEl.appendChild(buttonContainer);

    for(var i = 0;i<4;i++)
    {   
        var answer = document.getElementById(i);
        answer.textContent = quiz[index].choice[i];
        buttonContainer.appendChild(answer);
        quizFormEl.appendChild(buttonContainer);
        
    }
}

    

//Timer for the quiz
function timer(time)
{
    
    var downloadTimer = setInterval(function(){
    if(time <= 0)
    {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time's Up!";
        window.alert("Your Score is: "+scoreEl);
        timeUp = true;
        window.location.reload();
    } 
    else
    {
        document.getElementById("timer").innerHTML = "Time Remaining: "+time+ " seconds";
    }

    if(correct===true)
    {
        time+=4;
        correct=false;
    }
    time -= 1;
    }, 1000);
    
}

//saves highscore to local storage
function saveScore(name,score)
{
    var highScore={playerName: name,PlayerScore: score};
    localStorage.setItem('highscore',JSON.stringify(highScore));
}

//loads save score from localstorage and overwirtes if current socre is highers
function loadScore(name,score)
{
    if(localStorage.getItem('highscore')===null)
        {
            saveScore(name,score);
            window.location.reload();
        }
        else
        {
            var setScore = JSON.parse(localStorage.getItem('highscore'));
            var newName =setScore.playerName;
            var newScore = setScore.PlayerScore;
            console.log(setScore);
            if(score>(newScore))
            {
                window.alert("Congratulations, you hold the highscore now");
                saveScore(name,score);
            }
            else
            {
                window.alert("You failed to achive highscore \n"+ "Highscore: \n"+newName+"\n"+newScore);
            }
            window.location.reload();
        }

}