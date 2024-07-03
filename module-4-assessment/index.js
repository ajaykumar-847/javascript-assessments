function printResult(result) {
    console.log(result);
}

// 1.CALLBACK FUNCTION
function callBackFunction(callback) {
    setTimeout(() => {
        callback("Callback function executed after 3 seconds");
    }, 3000);
}

callBackFunction(printResult);


// 2.PROMISE
function promiseFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise function executed after 3 seconds");
        }, 3000);
    });
}

promiseFunction().then((result) => {
    console.log(result);
});


// 3.ASYNC/AWAIT
async function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async/Await executed after 3 seconds");
        }, 3000);
    });
}

async function callAsyncFunction() {
    const result = await asyncFunction();
    console.log(result);
}

callAsyncFunction();