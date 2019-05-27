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
        if (Id == "UNC") {
            if (result == "1982") {
                alert("1982 - UNC freshman Michael Jordan shoots the game winning shot to give the Tarheels the National Champtionship!")
            }
        }
        if (Id == "VT") {
            if (result == "2000") {
                alert("2000 - Freshman Michael Vick leads the Virginia Tech Hokies to the National Championship game with an undefeated regular season!")
            }
            if (result == "1995") {
                alert("1995 - BJ Ford runs unopposed for the presidency of the VA Zeta chapter of Sigma Alpha Epsilon. He wins with 10% of the vote.")
            }
        }
        if (Id == "UCI") {
            if (result == "2019") {
                alert("2019 - UC Irvine defeats Kansas State for first their ever NCAA Tournament Game Win!")
            }
        }
        if (Id == "Oso") {
            if (result == "2017") {
                alert("2017 - Katelyn and Taylor Rossi join the Oso Grande Grizzles as Kindergarteners!")
            }
            if (result == "2016") {
                alert("2016 -Dylan Rossi makes his first appearance as an Oso Grande Grizzly for his Kindergarten year!")
            }
        }
        if (Id == "Gonzaga") {
            if (result == "1964") {
                alert("1964 - Herman Joseph Rossi III graduates with a BA in History.  He would go on to a long and successful career in the Department of State, and would father four ungrateful children.")
            }
        }
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
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
