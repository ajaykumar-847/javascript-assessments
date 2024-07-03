let counterValue = 1;

// Validate the input data
function validation(data) {
    try {
        if (data == "") throw "empty";
        if (isNaN(data)) throw "not a number";
        data = Number(data);
        if (data < 5) throw "too low";
        if (data > 10) throw "too high";

    }
    catch(err) {
        alert(`The input is ${err}`);
        return err;
    }
    return true;
}

function buttonClicked() {
    const inputData = document.getElementById("input");
    inputData.innerHTML = "";

    // Increment the counter value
    let counter = document.getElementById("counter");
    counter.innerText = `SUBMIT COUNT = ${counterValue++}`;

    let value = validation(inputData.value)
    // Conditions to change the color of the button
    if (value == true) {
        counter.style.background = "green";
        counter.style.color = "white";
    }
    else if (value == "empty") {
        counter.style.background = "violet";
        counter.style.color = "white";
    }
    else if (value == "too low") {
        counter.style.background = "blue";
        counter.style.color = "white";
    }
    else if (value == "too high") {
        counter.style.background = "gray";
        counter.style.color = "white";
    }
    else {
        counter.style.background = "red";
        counter.style.color = "white";
    }
}