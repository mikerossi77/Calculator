function numberClick(numberClicked) {
    debugger;
    /**Very first number clicked**/
    if (newNumber == true && result == 0) {
        result = numberClicked;
        newNumber = false;
    }
    /**Second number in long number**/
    else if (newNumber == false) {
        result = String(result) + String(numberClicked);
    }
    /**First Number after operation**/
    else if (tempResult !== "null" && newNumber == true) {
        result = numberClicked;
        newNumber = false;
    }
    else if (operation == "null") {
        debugger;
        result = result + numberClicked;
    }
    else if (tempResult == result) {
        debugger;
        result = numberClicked
    }
    else {
        debugger;
        tempResult = result;
        result = myCalculator(tempResult, operation, result);
        operation = "null";
    }
    document.getElementById('result').value = Number(result);
}

function operatorClick(operatorClicked) {

    debugger;
    if (operatorClicked == "=") {
        debugger;
        result = myCalculator(tempResult, operation, result);
        newNumber = true;
        tempResult = 0
        operation = "null"
        firstOperation = true;
    }
    else if (operatorClicked == "clear") {
        result = 0;
        tempResult = 0;
        operation = "null";
        newNumber = true;
        firstOperation = true;
    }
    /**User cliked +,-,*,/ **/
    /**First time operation clicked**/
    else if (firstOperation == true) {
        operation = operatorClicked;
        newNumber = true;
        tempResult = result;
        firstOperation = false;
    }
    else {
        // second time operator clicked, and every time after that without pressing equals
        debugger;
        result = myCalculator(tempResult, operation, result);
        newNumber = true;
        tempResult = result;
        operation = operatorClicked;
    }
    document.getElementById('result').value = Number(result);
}
function myCalculator(firstNumber, operator, secondNumber) {

    // console.log("in the fuction with:", x, ", ", y, ", ", z);
    // var firstNumber = document.getElementById('firstInput').value;
    // var operator = document.getElementById('operatorInput').value;
    // var secondNumber = document.getElementById('secondInput').value;


    if (operator == "+") {
        answer = Number(firstNumber) + Number(secondNumber);
        console.log("Addition" + firstNumber + operator + secondNumber)
    }
    else if (operator == "-") {
        answer = firstNumber - secondNumber;
        console.log("Subtraction" + firstNumber + operator + secondNumber)
    }
    else if (operator == "*") {
        answer = firstNumber * secondNumber;
        console.log("Multiply" + firstNumber + operator + secondNumber)
    }
    else {
        answer = Number(firstNumber) / Number(secondNumber);
        console.log("Divide" + firstNumber + operator + secondNumber)
    }

    document.getElementById('result').value = answer;
    return answer;
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
