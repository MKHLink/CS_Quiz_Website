
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

var headerEl = document.querySelector("#header");
var quizFormEl = document.querySelector("#quiz-start");
var buttonContainer = document.querySelector("#btn-container")
var indexEl = 0;
var scoreEl = 0;
var timeleft = 10;

var button1 = document.getElementById("0");
var button2 = document.getElementById("1");
var button3 = document.getElementById("2");
var button4 = document.getElementById("3");
var correct = false;
var timeUp = false;

var startbtn = document.getElementById("btn");
startbtn.onclick=function(){
    timer(timeleft);
    var message = document.createElement("h5");
    message.textContent = "Each correct asnwer adds time to the timer!";
    headerEl.appendChild(message);
};

quizFormEl.addEventListener("submit",showQuiz);

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
    }

    indexEl++;
}

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

    


function timer(time)
{
    
    var downloadTimer = setInterval(function(){
    if(time <= 0)
    {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time's Up!";
        window.alert("Your Score is: "+scoreEl);
        timeUp = true;
    } 
    else
    {
        document.getElementById("timer").innerHTML = "Time Remaining: "+time+ " seconds";
    }

    if(correct===true)
    {
        time+=10;
        correct=false;
    }
    time -= 1;
    }, 1000);
    
}

