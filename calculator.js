function appendOperation(operation) {
    document.getElementById("resultArea").innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById("resultArea");
    let result = eval(container.innerHTML);
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
