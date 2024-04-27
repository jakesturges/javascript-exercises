const fibonacci = function (n) {
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;

    for (let i = 1; i < n; i++) {
        nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
    }
    return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
