function appendOperation(operation) {
    document.getElementById("resultArea").innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById("resultArea");
    let calculation = document.getElementById("historyArea");
    calculation.innerHTML = container.innerHTML;
    let result = (eval(container.innerHTML)).toFixed(5);
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById("resultArea");
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 3);
    } else {
        container.innerHTML = container.innerHTML.substring(0, container.innerHTML.length - 1);
    }
}

function clearCalculator() {
    let container = document.getElementById("resultArea");
    container.innerHTML = "";
}
