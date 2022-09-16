
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

var quizFormEl = document.querySelector("#quiz-start");
var buttonContainer = document.querySelector("#btn-container")
var indexEl = 0;
var score = 0;

quizFormEl.addEventListener("submit",showQuiz);

function showQuiz(event)
{
    event.preventDefault();
    
    if(indexEl<10)
    {
        quizDisplay(quizEl,indexEl);
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
