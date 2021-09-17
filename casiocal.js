//mobile screen 960px  1425px

let screen = document.getElementById('screen');
let sci1Op = document.getElementById('sci1Op');
let sci1 = document.getElementById('sci1');
let sci2 = document.getElementById('sci2');
let sci3 = document.getElementById('sci3');
let sci4 = document.getElementById('sci4');
let first = document.getElementById('first');
let second = document.getElementById('second');
let operator = document.getElementById('operator');
let spef1 = document.getElementById('spef1');
let cursor = document.getElementById('cursor');
let answer = document.getElementById('ans')
let firstinp = document.getElementById('firinp');
let secinp = document.getElementById('secinp');
let thirinp = document.getElementById('thirinp');
let getit1 = document.getElementById('getit1');
let getit2 = document.getElementById('getit2');
let clr = document.getElementById('clr');
let delCont = document.getElementById('del');
let addUp = document.getElementById('addup');
let Bracket = document.querySelectorAll('#Bracket');
let closeBracket = document.getElementById('closeBracket');
let allButton = document.querySelectorAll('button');
let allDigit = document.querySelectorAll('#digit');
let allOperator = document.querySelectorAll('#ope');
let allSpecial = document.querySelectorAll('#special');
let allLog = document.querySelectorAll('#sci');
let casioo = document.querySelectorAll('#casioo');
let inps = document.querySelectorAll('input');
let number1, number2, final, shodig, shoprite, num1, num2;
let equal = false, digitPress = false, oper = false, number = false, getanswer = false, decimal = false, answerCount = 1, ten = false, shoten, countOper = 1, showdig, formalAnswer, clear = false, dell = false, addmeup = 1, addit, addfx = false, addpress, remobrack1, remobrack2, braket, brack1 = false, brack2 = false, useFor, shift = false, mode = true, casPress, sdpress = false, all_input, fromInp, sdResult, spfxpre = false, NumberSd, sdcount = 1, loga, logar = false, invokeLog, logg, reallog;
//Let me invoke cursor to start blinking;
flash();

//start by displaying spef1 to none...
spef1.style.display = "none";

//get all button for sound.
allButton.forEach(function (bts) {
    bts.addEventListener('click', sound)
})
function sound() {
    let btnsound = new Audio();
    btnsound.src = ('click.mp3');
    btnsound.play();
}

//Let my cursor display.
function flash() {
    cursor.innerHTML = "";
    function blink() {
        cursor.innerHTML = '|';
    }
    function blink2() {
        cursor.innerHTML = "";
    }
    blinkout = setInterval(blink, 1000)
    blinkin = setInterval(blink2, 2000)
}

//let me get digit from each button
allDigit.forEach(function (digs) {
    digs.addEventListener('click', getDigit);
})
function getDigit(params) {
    digitPress = true;
    shodig = params.target.innerHTML;
    //if S-D id pressed without a number
    if (spfxpre == true && fromInp.target.id == fromInp.target.id || (clear == true && spfxpre == true)) {
        fromInp.target.value += shodig;
        calsp(sdResult);
        number1 = sdResult;
        console.log("hi");
    }
    if ((first.innerHTML != "" && oper == false && spfxpre == true) || (clear == true && spfxpre == true)) {
        spef1.style.display = "flex";
        let j = Number(first.innerHTML);
        calsp(sdResult);
        fromInp.target.value = fromInp.target.value;
        NumberSd = j * sdResult;
        number1 = NumberSd;
        arith();
        console.log("hi");
    }
    if ((oper == true && equal == true && digitPress == true && dell == false) || (spfxpre == true && equal == true) || (logar == true && equal == true)) {
        oper = false, equal = false, spfxpre = false, logar = false;
        formalAnswer = final;
        first.innerHTML = "";
        second.innerHTML = "";
        operator.innerHTML = "";
        answer.innerHTML = "";
        sci1.innerHTML = "";
        sci2.innerHTML = "";
        spef1.style.display = "none"
        console.log("hi");
    }
    if ((oper == false && spfxpre == false)) {
        first.innerHTML += shodig;
        answer.innerHTML += shodig;
        console.log("hi");
    }
    if (oper == false && spfxpre == true && equal == true && digitPress == true) {
        spef1.style.display == "none";
        console.log("hi");
    }
    else if (oper == true && equal == false) {
        second.innerHTML += shodig;
        console.log("hi");
    }
    //Do arithmetics
    numoperation();
}

//let me get Operator from each operator button
allOperator.forEach(function (opera) {
    opera.addEventListener('click', getOpera);
})
function getOpera(params) {
    countOper++
    oper = true;
    shoprite = params.target.innerHTML;
    operator.innerHTML += shoprite;

    //When Raise to power is press with number
    if (shoprite == "x10^") {
        number1 = Number(first.innerHTML);
        number2 = Number(second.innerHTML);
        arith();
        equal = true;
        console.log("hi");
    }

    //Using Operator again after you check answer or you have not check answer
    if ((equal == true && oper == true) || (spfxpre == true && equal == true)) {
        equal = false;
        if (oper == true) {
            first.innerHTML = "";
            operator.innerHTML = "";
            second.innerHTML = "";
            spef1.style.display = "none";
            firstinp.value = "";
            secinp.value = "";
            thirinp.value = "";
            sci1.innerHTML = ""
            sci2.innerHTML = ""
            sci3.innerHTML = "";
            sci4.innerHTML = "";
            operator.innerHTML = shoprite;
            first.innerHTML = answer.innerHTML;
            number1 = Number(first.innerHTML);
            number2 = Number(second.innerHTML);
            arith();
            console.log("hi");
        }
    }

    else if (clear == true && oper == true && dell == false && getanswer == true) {
        second.innerHTML = final;
        number2 = Number(second.innerHTML);
        arith();
        answerCount = 1;
        console.log("hi");
    }
}

//set numbers in variable for operation
function numoperation() {
    if (oper == false) {
        number1 = Number(first.innerHTML);
        arith();
        console.log("hi");
    }
    else if (oper == true) {
        number2 = Number(second.innerHTML);
        arith();
        console.log("hi");
    }
}

//let me call back my answer all time and turns number double
allSpecial.forEach(function (special) {
    special.addEventListener('click', clickAnswer)
})
function clickAnswer(params) {
    if (params.target.innerHTML == "ANS") {
        getanswer = true;
        console.log(getanswer, equal, spfxpre, answerCount);
        answerCount++
        if ((equal == true)) {
            console.log(answerCount);
            first.innerHTML = "";
            operator.innerHTML = "";
            second.innerHTML = "";
            sci1.innerHTML = "";
            sci2.innerHTML = "";
            sci3.innerHTML = "";
            sci4.innerHTML = "";
            spef1.style.display = "none";
            first.innerHTML = answer.innerHTML;
            number1 = Number(first.innerHTML);
            answer.innerHTML = number1;
            oper = false;
            console.log("hi");
        }
        else if ((getanswer == true && answerCount < 2 && oper == true)) {
            operator.innerHTML = shoprite;
            second.innerHTML = final;
            number2 = Number(second.innerHTML);
            arith();
            answerCount = 1;
            console.log("hi");
        }
        else if ((getanswer == true && answerCount >= 2 && oper == true)) {
            operator.innerHTML = shoprite;
            second.innerHTML = answer.innerHTML;
            number2 = Number(second.innerHTML);
            arith();
            answerCount = 1;
            console.log("hi");
        }
        if (spfxpre == true && equal == true && oper == true) {
            operator.innerHTML = shoprite;
            second.innerHTML = formalAnswer;
            number2 = Number(second.innerHTML);
            arith();
            console.log("hi");
        }
        if (logar == true && equal == true && oper == true) {
            operator.innerHTML = shoprite;
            second.innerHTML = answer.innerHTML;
            number2 = Number(second.innerHTML);
            arith();
            console.log("hi");
        }
        if (clear == true && getanswer == true && oper == false && equal == true) {
            first.innerHTML = final;
            answer.innerHTML = first.innerHTML;
            console.log("hi");
        }
    }

    // I want to S-D
    else if (params.target.innerHTML == "S-D") {
        sdcount++
        if (first.innerHTML == "" && oper == false) {
            answer.innerHTML = "";
            first.innerHTML = "";
            firstinp.value = "";
            secinp.value = "";
            thirinp.value = "";
            spef1.style.display = "flex";
            console.log("hi");
            inps.forEach(function (max) {
                max.addEventListener('click', over)
            })
        }
        else if (first.innerHTML != "" && oper == false) {
            spef1.style.display = "flex";
            firstinp.value = "";
            secinp.value = "";
            thirinp.value = "";
            console.log("hi");
            inps.forEach(function (max) {
                max.addEventListener('click', over)
            })
        }
    }

    //if i convert to double
    else if (params.target.innerHTML == ".") {
        decimal = true;
        if (oper == false && digitPress == true) {
            first.innerHTML += params.target.innerHTML;
            number1 = Number(first.innerHTML);
            answer.innerHTML = first.innerHTML;
            console.log("hi");
        }
        else if (oper == true && digitPress == true) {
            second.innerHTML += params.target.innerHTML;
            number2 = Number(first.innerHTML);
            console.log("hi");
            arith();
        }
    }
}

function over(spec) {
    spfxpre = true;
    if (spec.target.id == "firinp") {
        fromInp = spec;
        console.log("hi");
    }
    else if (spec.target.id == "secinp") {
        fromInp = spec;
        console.log("hi");
    }
    else if (spec.target.id == "thirinp") {
        fromInp = spec;
        console.log("hi");
    }
}

function calsp(e) {
    for (let j = 0; j < inps.length; j++) {
    }
    let g = Number(inps[0].value);
    let k = Number(inps[1].value);
    let l = Number(inps[2].value);
    sdResult = (g + (k / l));
    number1 = sdResult;
}




//let me clear screen
clr.addEventListener('click', clearscreen);
function clearscreen() {
    clear = true;
    formalAnswer = final;
    first.innerHTML = "";
    second.innerHTML = "";
    operator.innerHTML = "";
    answer.innerHTML = "";
    sci1.innerHTML = "";
    sci2.innerHTML = "";
    sci3.innerHTML = "";
    sci4.innerHTML = "";
    spef1.style.display = "none";
    firstinp.value = "";
    secinp.value = "";
    thirinp.value = "";
    console.log("hi");
    if (clear == true && equal == false) {
        first.innerHTML = "";
        second.innerHTML = "";
        operator.innerHTML = "";
        answer.innerHTML = "";
        sci1.innerHTML = "";
        sci2.innerHTML = "";
        sci3.innerHTML = "";
        sci4.innerHTML = "";
        spef1.style.display = "none";
        firstinp.value = "";
        secinp.value = "";
        thirinp.value = "";
        console.log("hi");
    }
}

//let me delete character and update it
delCont.addEventListener('click', delCo)
function delCo() {
    dell = true;
    if (dell == true && operator.innerHTML == "") {
        let a = first.innerHTML.replace(first.innerHTML.slice(-1), "");
        first.innerHTML = a;
        number1 = Number(first.innerHTML);
        answer.innerHTML = number1;
        console.log("hi");
        //if you delete all character, reload calculator
        if (first.innerHTML == "") {
            location.reload();
            console.log("hi");
        }
    }
    else if (dell == true && oper == true && second.innerHTML == "" && sci3.innerHTML == "") {
        let a = operator.innerHTML.replace(operator.innerHTML.slice(-1), "");
        operator.innerHTML = a;
        console.log("hi");
    }
    else if (dell == true && oper == true && second.innerHTML != "" && sci4.innerHTML == "") {
        let a = second.innerHTML.replace(second.innerHTML.slice(-1), "");
        second.innerHTML = a;
        number2 = Number(second.innerHTML);
        console.log("hi");
        arith()
    }
    else if (dell == true && oper == true && second.innerHTML == "") {
        let a = sci3.innerHTML.replace(sci3.innerHTML.slice(-1), "");
        sci3.innerHTML = a;
        console.log("hi");
    }
    else if (dell == true && oper == true && sci4 != "") {
        let a = sci4.innerHTML.replace(sci4.innerHTML.slice(-1), "");
        sci4.innerHTML = a; console.log("hi");
    }
}

//Let me use M+ and add up number to its initial value;
addUp.addEventListener('click', addTome)
function addTome(params) {
    addfx = true;
    addpress = params.target.innerHTML;
    addmeup++;
    if (addmeup == 2) {
        operator.innerHTML = params.target.innerHTML;
        number1 = Number(first.innerHTML);
        addit = number1;
        number1 = (number1 + number1);
        answer.innerHTML = number1;
        console.log("hi");
        arith();
    }
    else if (addmeup > 2) {
        number1 = Number(answer.innerHTML);
        first.innerHTML = number1;
        number1 = number1 + addit;
        answer.innerHTML = number1;
        console.log("hi");
        arith();
    }
}

//Bracket operation
Bracket.forEach(function (max) {
    max.addEventListener('click', Brack)
})
function Brack(params) {
    braket = params.target.innerHTML;
    if (oper == false) {
        if (braket == "(") {
            brack1 = true;
            console.log("open");
            sci1.innerHTML = braket;
            console.log("hi");
        }
        else if (braket == ")") {
            brack2 = true;
            console.log("close");
            sci2.innerHTML = braket;
            console.log("hi");
        }
    }
    else if (oper == true) {
        if (braket == "(") {
            brack1 = true;
            console.log("open");
            sci3.innerHTML = braket;
            console.log("hi");
        }
        else if (braket == ")") {
            brack2 = true;
            console.log("close");
            sci4.innerHTML = braket;
            console.log("hi");
        }
    }
}


//let me do Logarith
allLog.forEach(function (max) {
    max.addEventListener('click', logarithm)
})
function logarithm(params) {
    logar = true;
    reallog = params.target.innerHTML;
    if (reallog == "tan") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Math.tan(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.tan(number2);
            console.log(number2);
            arith();
        }
        if (shift == true && oper == false) {
            loga = reallog;
            sci1.innerHTML = "1/tan";
            number1 = 1 / Math.tan(number1);
            console.log(number1);
            shift = false;
            arith();
        }
        else if (oper == true && shift == true) {
            loga = reallog;
            sci3.innerHTML = "1/tan";
            number2 = 1 / Math.tan(number2);
            console.log(number2);
            shift = false;
            arith();
        }
    }
    if (reallog == "sin") {
        if (oper == false && shift == false) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Number(first.innerHTML);
            number1 = Math.sin(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.sin(number2);
            console.log(number2);
            arith();
        }
        if (shift == true && oper == false) {
            loga = reallog;
            sci1.innerHTML = "1/sin";
            number1 = 1 / Math.sin(number1);
            console.log(number1);
            shift = false;
            arith();
        }
        else if (oper == true && shift == true) {
            loga = reallog;
            sci3.innerHTML = "1/sin";
            number2 = 1 / Math.sin(number2);
            console.log(number2);
            shift = false;
            arith();
        }
    }
    if (reallog == "cos") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Math.cos(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.cos(number2);
            console.log(number2);
            arith();
        }
        if (shift == true && oper == false) {
            loga = reallog;
            sci1.innerHTML = "1/cos";
            number1 = 1 / Math.cos(number1);
            console.log(number1);
            shift = false;
            arith();
        }
        else if (oper == true && shift == true) {
            loga = reallog;
            sci3.innerHTML = "1/cos";
            number2 = 1 / Math.cos(number2);
            console.log(number2);
            shift = false;
            arith();
        }
    }
    if (reallog == "log") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Math.log(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.log(number2);
            console.log(number2);
            arith();
        }
    }
    if (reallog == "ln") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Math.exp(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.exp(number2);
            console.log(number2);
            arith();
        }
    }
    if (reallog == "x^2") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci2.innerHTML = loga;
            number1 = (number1) ** 2;
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci4.innerHTML = loga;
            number2 = (number2) ** 2;
            console.log(number2);
            arith();
        }
    }
    if (reallog == "x^3") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci2.innerHTML = loga;
            number1 = (number1) ** 3;
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci4.innerHTML = loga;
            number2 = (number2) ** 3;
            console.log(number2);
            arith();
        }
    }
    if (reallog == "SQRT") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = Math.sqrt(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = Math.sqrt(number2);
            console.log(number2);
            arith();
        }
    }
    if (reallog == "1/X") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = '1/';
            number1 = 1 / (number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = '1/';
            number2 = 1 / (number2);
            console.log(number2);
            arith();
        }
    }
    if (reallog == "loga^x") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = 1 / Math.exp(number1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = 1 / Math.exp(number2);
            console.log(number2);
            arith();
        }
    }
    if (reallog == "H") {
        if (oper == false && logar == true) {
            loga = reallog;
            sci1.innerHTML = loga;
            number1 = (number1) ** number1;
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = reallog;
            sci3.innerHTML = loga;
            number2 = (number2) ** number2;
            console.log(number2);
            arith();
        }
    }
    if (reallog == "(-)") {
        if (oper == false && logar == true) {
            loga = params.target.innerHTML;
            sci1.innerHTML = "-";
            number1 = (number1) * (-1);
            console.log(number1);
            arith();
        }
        else if (oper == true && logar == true) {
            loga = params.target.innerHTML;
            sci3.innerHTML = "-";
            number2 = (number2) * (-1);
            console.log(number2);
            arith();
        }
    }
}




// LET SHIFT AND MODE WORK, I AM TIRED
casioo.forEach(function (max) {
    max.addEventListener('click', casio);
})

function casio(params) {
    casPress = params.target.innerHTML;
    if (casPress == "SHIFT") {
        shift = true;
        console.log(casPress);
    }
    else if (casPress == "MODE") {
        mode = true;
        console.log(casPress);
    }
}





//let me do arithmetic
function arith() {
    if ((logar == true && oper == false && first.innerHTML != "")) {
        final = (number1);
        formalAnswer = final;
        console.log(final);
    }
    if ((shoprite == "+")) {
        if (logar == true && oper == false) {
            number2 = 0;
            final = number1 + number2;
            formalAnswer = final;
            console.log(number1, number2);
        }
        final = number1 + number2;
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (shoprite == "*") {
        if (logar == true && oper == false) {
            number2=1;
            final = number1 * number2;
            formalAnswer = final;
            console.log(number1, number2);
        }
        final = number1 * number2;
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (shoprite == "/") {
        if (logar == true && oper == false) {
            number2=1
            final = number1 / number2;
            formalAnswer = final;
            console.log(number1, number2);
        }
        final = number1 / number2;
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (shoprite == "-") {
        if (logar == true && oper == false) {
            number2=0;
            final = number1 - number2;
            formalAnswer = final;
            console.log(number1, number2);
        }
        final = number1 - number2;
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (oper == false && logar == false) {
        final = number1;
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (shoprite == "x10^") {
        final = (number1 * (10 ** number2));
        formalAnswer = final;
        console.log(number1, number2);
    }
    else if (addpress == "M+") {
        final = number1;
        formalAnswer = final;
        console.log(number1, number2);
    }
    if (spfxpre == true && first.innerHTML == "") {
        calsp(number1);
        final = number1;
        formalans = final;
        console.log(number1, number2);
    }
    if (spfxpre == true && first.innerHTML != "" && getanswer == false) {
        final = NumberSd;
        formalans = final;
        console.log(number1, number2);
    }
}

//My answer will display;
function equall() {
    equal = true;
    answer.innerHTML = final;
}

function restart() {
    location.reload();
}

