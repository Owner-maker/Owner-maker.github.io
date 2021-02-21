// -----------------------------------------

// загрузка html-страницы

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("name")==null){
        result = prompt("Представьтесь пожалуйста", ["Гость"]);
        while(result===null || result.length >10 || result.length ==0)var result = prompt("Представьтесь пожалуйста (не более 10 символов)", ["Гость"]);
        localStorage.setItem("name", result);
        document.getElementById("name").innerText = result;
        document.getElementById("nameOnSlide").innerText = result;
    }
    else {
        document.getElementById("name").innerText = localStorage.getItem("name"); 
        document.getElementById("nameOnSlide").innerText = localStorage.getItem("name");
    }

    var now = new Date();
    var date;
    if(now.getDate()/10 < 1)date+=".0"+now.getDate();
    else date=now.getDate();
    var month = now.getMonth() +1;
    if(month/10 < 1)date+=".0"+month+".";
    else date+="."+month+".";
    date+=now.getFullYear();
    document.getElementById("dateOnSlide").innerText = date;


//  глобальные переменные для таймера
    startMinValue = 0;
    startSecValue = 0;
    stopMinValue = 0;
    stopSecValue = 0;
    switcher = false;

// загрузка первого вопроса для теста

    document.getElementById("questionNumber").innerText = "Вопрос 1/10";
    document.getElementById("questionText").innerText = questions[0].question;
    document.getElementById("answ1").innerText = questions[0].option1;
    document.getElementById("answ2").innerText = questions[0].option2;
    document.getElementById("answ3").innerText = questions[0].option3;
    document.getElementById("inputValue1").value = questions[0].option1;
    document.getElementById("inputValue2").value = questions[0].option2;
    document.getElementById("inputValue3").value = questions[0].option3;

// глобальная переменная текущего вопроса в тесте

    numberOfQuestion = 0;
});


// -----------------------------------------
// слайдер

function clickMe() {
    event.preventDefault();
    document.getElementById("anim").style.display = "block";
    document.body.style.overflow='hidden';
    document.getElementById("noAccess").classList.toggle("bodyNoAccess");
    // document.getElementById("anim").classList.toggle("slideRight");
    
}

function clickMeBack() {
    event.preventDefault();
    document.getElementById("anim").classList.toggle("slideLeft");
    setTimeout(hide,2000);
    document.body.style.overflow='auto'
    document.getElementById("bodyNoAccess").style.pointer = "all";
}

function hide(){
    document.getElementById("anim").style.display = "none";
    document.getElementById("noAccess").classList.toggle("bodyNoAccess");
    location.reload();
}

function clickToRename(){
    localStorage.removeItem("name");
    document.getElementById("nameOnSlide").innerText = "Гость";
}

// -----------------------------------------
// кнопка для закрытия блоков из меню

function clickToClose(){
    document.getElementById("body_block1").style.display = "none";
    document.getElementById("body_mainBlock1").style.display = "none";
    document.getElementById("body_mainBlock2").style.display = "none";
    // здесь надо еще делать невидимыми другие блоки!!!!!
}

// -----------------------------------------
// кнопки открытия блоков меню

function clickToOpenBlock1(){
    event.preventDefault();
    document.getElementById("body_block1").style.display = "flex";
    document.getElementById("body_mainBlock1").style.display = "flex";
    document.getElementById("body_mainBlock2").style.display = "none";
    document.getElementById("body_mainBlock3").style.display = "none";
    document.getElementById("body_mainBlock4").style.display = "none";
    document.getElementById("body_mainBlock5").style.display = "none";
}
function clickToOpenBlock2(){
    event.preventDefault();
    document.getElementById("body_block1").style.display = "flex";
    document.getElementById("body_mainBlock2").style.display = "flex";
    document.getElementById("body_mainBlock1").style.display = "none";
    document.getElementById("body_mainBlock3").style.display = "none";
    document.getElementById("body_mainBlock4").style.display = "none";
    document.getElementById("body_mainBlock5").style.display = "none";
}
function clickToOpenBlock3(){
    event.preventDefault();
    document.getElementById("body_block1").style.display = "flex";
    document.getElementById("body_mainBlock3").style.display = "flex";
    document.getElementById("body_mainBlock1").style.display = "none";
    document.getElementById("body_mainBlock2").style.display = "none";
    document.getElementById("body_mainBlock4").style.display = "none";
    document.getElementById("body_mainBlock5").style.display = "none";
}
function clickToOpenBlock4(){
    event.preventDefault();
    document.getElementById("body_block1").style.display = "flex";
    document.getElementById("body_mainBlock4").style.display = "flex";
    document.getElementById("body_mainBlock3").style.display = "none";
    document.getElementById("body_mainBlock1").style.display = "none";
    document.getElementById("body_mainBlock2").style.display = "none";
    document.getElementById("body_mainBlock5").style.display = "none";
}
function clickToOpenBlock5(){
    event.preventDefault();
    document.getElementById("body_block1").style.display = "flex";
    document.getElementById("body_mainBlock5").style.display = "flex";
    document.getElementById("body_mainBlock4").style.display = "none";
    document.getElementById("body_mainBlock3").style.display = "none";
    document.getElementById("body_mainBlock1").style.display = "none";
    document.getElementById("body_mainBlock2").style.display = "none";
}




// -----------------------------------------
// площадь треугольника

function clickToSolveTheSquare(){
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    if(!isNaN(height)&&(!isNaN(base))){
        let result = base * height /2;
        document.getElementById("theSolutionSquare").innerText = "Площадь: " + result;
    }
    else document.getElementById("theSolutionSquare").innerText = "Некорректные значения";
}

// -----------------------------------------
// строки

function clickToCompareStr(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    console.log(str1.isNaN)
    if(str1.length==str2.length)document.getElementById("theSolutionStr").innerText = "Одинаковы: true" ;
    else document.getElementById("theSolutionStr").innerText = "Разные: false";
}

// -----------------------------------------
// расчет массива

function clickToSolveTheArr(){
    var arr1 = Number(document.getElementById("arr1").value);
    var arr2 = Number(document.getElementById("arr2").value);
    var arr3 = Number(document.getElementById("arr3").value);
    var arr4 = Number(document.getElementById("arr4").value);
    var arr5 = Number(document.getElementById("arr5").value);
    if((!isNaN(arr1))&&(!isNaN(arr2))&&(!isNaN(arr3))&&(!isNaN(arr4))&&(!isNaN(arr5))){
         var arr = [arr1,arr2,arr3,arr4,arr5];
         console.log(arr)
         var max = arr[0];
         var min = arr[0];
        for (var i=1;i<arr.length; i++){
            if (arr[i]>max) {
                max = arr[i];
                console.log(max);
            }
            
            if (arr[i]<min) min = arr[i];
        }
       
        document.getElementById("theSolutionArr").innerText = "Макс. число: " + max + "\n" + "Мин. число: " + min;
    }
    else document.getElementById("theSolutionArr").innerText = "Некорректные значения";
}

// -----------------------------------------
// таймер

// кнопки для минут и секунд

function ChangeMin(n){
    var min = Number(document.getElementById("textMin").value);
    
    if(min+n>=0 && min+n<60){
        if((min+n)/10>=1){
            min+=n;
            document.getElementById("textMin").value = min;
        }
        else{
            min+=n;
            document.getElementById("textMin").value = "0" + min;
        }
    }
}
function ChangeSec(n){
    var min = Number(document.getElementById("textSec").value);
    
    if(min+n>=0 && min+n<60){
        if((min+n)/10>=1){
            min+=n;
            document.getElementById("textSec").value = min;
        }
        else{
            min+=n;
            document.getElementById("textSec").value = "0" + min;
        }
    }
    console.log(min)
}

// функция отсчета

function startTimer(){
    switcher = true;
    timer = setInterval(() => {
        var min = Number(document.getElementById("textMin").value);
        var sec = Number(document.getElementById("textSec").value);

        if ((min==0)&&(sec==0)){
            clearInterval(timer);
            alert("Отсчет окончен.");
            switcher = false;
            document.getElementById("timer").style.pointerEvents = "all";
            document.getElementById("buttonToStartTimer").style.pointerEvents = "all";
            stopMinValue = document.getElementById("textMin").value;
            stopSecValue = document.getElementById("textSec").value;
        }
        else if (sec!=0) ChangeSec(-1);
        else if (min!=0){
            ChangeMin(-1);
            document.getElementById("textSec").value = 59;
        }
    }, 1000);
}

//функции таймера


function clickToStartTimer(){
    document.getElementById("timer").style.pointerEvents = "none";
    document.getElementById("buttonToStartTimer").style.pointerEvents = "none";
    document.getElementById("pastTime").innerText = "";
    var min = Number(document.getElementById("textMin").value);
    var sec = Number(document.getElementById("textSec").value);
    startMinValue = min;
    startSecValue = sec;
    if(min!=0 || sec!=0) startTimer();
    else{
        document.getElementById("timer").style.pointerEvents = "all";
        document.getElementById("buttonToStartTimer").style.pointerEvents = "all";
    }
}

function clickToStopTimer(){
    switcher = false;
    clearInterval(timer);
    stopMinValue = document.getElementById("textMin").value;
    stopSecValue = document.getElementById("textSec").value;
    document.getElementById("timer").style.pointerEvents = "all";
    document.getElementById("buttonToStartTimer").style.pointerEvents = "all";
}

function clickToSolveTheTime(){
    if(switcher){
        stopMinValue = document.getElementById("textMin").value;
        stopSecValue = document.getElementById("textSec").value;
    }
    timeMinBetween = startMinValue - stopMinValue;
    timeSecBetween = startSecValue - stopSecValue;
    document.getElementById("pastTime").innerText = "Прошло: \n" + timeMinBetween + " мин. " + timeSecBetween + " сек.";
}

// ТЕСТ

// нажатие кнопки к следующему вопросу

function clickToNextQuestion(){
    var input = document.getElementsByName('answer');
    for (var i = 0; i < input.length; i++) {
        if (input[i].type == "radio" && input[i].checked) {
            questions[numberOfQuestion].choice = "" + input[i].value;
            if (numberOfQuestion<=8){
                input[i].checked = false;
                numberOfQuestion++;
                if(numberOfQuestion==9)document.getElementById("clickToNextQuestion").innerText = "Закончить тест";
                if(numberOfQuestion>0){
                    document.getElementById("clickToPrevQuestion").style.display = "block";
                    var currNumberOfQuestion = numberOfQuestion+1;
                    document.getElementById("questionNumber").innerText = "Вопрос " + currNumberOfQuestion + "/10";
                    document.getElementById("questionText").innerText = questions[numberOfQuestion].question;
                    document.getElementById("answ1").innerText = questions[numberOfQuestion].option1;
                    document.getElementById("answ2").innerText = questions[numberOfQuestion].option2;
                    document.getElementById("answ3").innerText = questions[numberOfQuestion].option3;
                    document.getElementById("inputValue1").value = questions[numberOfQuestion].option1;
                    document.getElementById("inputValue2").value = questions[numberOfQuestion].option2;
                    document.getElementById("inputValue3").value = questions[numberOfQuestion].option3;
                    return;
                }
            }
            else{
                numberOfQuestion++;
                document.getElementById("clickToNextQuestion").style.display = "none";
                document.getElementById("clickToPrevQuestion").style.display = "none";
                document.getElementById("clickToRestartTest").style.display = "block";
                document.getElementById("questionTestBlock").style.display = "none";
                document.getElementById("clickToNextQuestion").innerText = "Следующий";
                document.getElementById("questionBlockResult").style.display = "flex";

                // вывод результатов теста

                var container = document.getElementById("blockResult");
                var result = 0;
                for (let i=0;i<questions.length;i++){
                    let field = document.createElement('p');
                    let currNumber = i+1;
                    let rightness;
                    if(questions[i].choice==questions[i].answer){
                        rightness = "верно";
                        result++;
                    }
                    else rightness = "неверно";
                    field.innerText = "#" + currNumber + " - " + questions[i].choice + " - " + rightness;
                    container.appendChild(field);
                }
                var finaleResultStr;
                if(result<5) finaleResultStr = "Повторите информацию с сайта и попробуйте еще."
                else if (result>=5&&result<=7) finaleResultStr = "Хороший результат."
                else if (result>=8&&result<=9) finaleResultStr = "Отличный результат."
                else if (result==10) finaleResultStr = "Превосходно. Вы отлично усвоили информацию с сайта."

                document.getElementById("blockResultTitle").innerText = "Итог: " + result + "/10 - " + finaleResultStr;
            }
        }
    }
}

//нажатие кнопки к предыдущем вопросу

function clickToPrevQuestion(){
    if(numberOfQuestion>0){
        var input = document.getElementsByName('answer');
        for (var i = 0; i < input.length; i++) {
            if (input[i].type == "radio" && input[i].checked) {
                input[i].checked = false;
            }
        }
        numberOfQuestion--;
        if(numberOfQuestion<9)document.getElementById("clickToNextQuestion").innerText = "Следующий";
        if(numberOfQuestion==0)document.getElementById("clickToPrevQuestion").style.display = "none";
        var currNumberOfQuestion = numberOfQuestion+1;
        document.getElementById("questionNumber").innerText = "Вопрос " + currNumberOfQuestion + "/10";
        document.getElementById("questionText").innerText = questions[numberOfQuestion].question;
        document.getElementById("answ1").innerText = questions[numberOfQuestion].option1;
        document.getElementById("answ2").innerText = questions[numberOfQuestion].option2;
        document.getElementById("answ3").innerText = questions[numberOfQuestion].option3;
        document.getElementById("inputValue1").value = questions[numberOfQuestion].option1;
        document.getElementById("inputValue2").value = questions[numberOfQuestion].option2;
        document.getElementById("inputValue3").value = questions[numberOfQuestion].option3;
        return;
    }
}

// нажатие кнопки заново

function clickToRestartTest(){
    numberOfQuestion=0;
    var input = document.getElementsByName('answer');
    for (var i = 0; i < input.length; i++) {
        if (input[i].type == "radio" && input[i].checked) {
            input[i].checked = false;
        }
    }
    for (var i=0;i<questions.length;i++)questions[i].choice = ""; //очищение ответов пользователя в массиве вопросов
    // document.getElementById("clickToPrevQuestion").style.display = "none";
    document.getElementById("questionBlockResult").style.display = "none";
    document.getElementById("questionTestBlock").style.display = "flex";
    document.getElementById("clickToNextQuestion").style.display = "block";
    document.getElementById("clickToRestartTest").style.display = "none";
    document.getElementById("questionNumber").innerText = "Вопрос 1/10";
    document.getElementById("questionText").innerText = questions[0].question;
    document.getElementById("answ1").innerText = questions[0].option1;
    document.getElementById("answ2").innerText = questions[0].option2;
    document.getElementById("answ3").innerText = questions[0].option3;
    document.getElementById("inputValue1").value = questions[0].option1;
    document.getElementById("inputValue2").value = questions[0].option2;
    document.getElementById("inputValue3").value = questions[0].option3;
}
