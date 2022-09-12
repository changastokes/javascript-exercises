const reverseString = function(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;

};

// Do not edit below this lines
module.exports = reverseString;
