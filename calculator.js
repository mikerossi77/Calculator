function numberClick(numberClicked) {
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
        result = result + numberClicked;
    }
    else if (tempResult == result) {
        result = numberClicked
    }
    else {
        tempResult = result;
        result = myCalculator(tempResult, operation, result);
        operation = "null";
    }
    document.getElementById('result').value = Number(result);
}

function operatorClick(operatorClicked) {

    if (operatorClicked == "=") {
        result = myCalculator(tempResult, operation, result);
        newNumber = true;
        tempResult = 0
        operation = "null"
    }
    else if (operatorClicked == "clear") {
        result = 0;
        tempResult = 0;
        operation = "null";
        newNumber = true;
    }
    /**User cliked +,-,*,/ **/
    /**First time operation clicked**/
    else if (operation == "null") {
        operation = operatorClicked;
        newNumber = true;
        tempResult = result;
    }
    else {
        result = myCalculator(tempResult, operation, result);
        newNumber = true;
        tempResult = 0;
        operation = "null";
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
