const palindromes = function (str) {
    let stripPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    //console.log(stripPunc);
    let finalStripPunc = stripPunc.replace(/ /g,"");
    //console.log(finalStripPunc);
    let finalStrippedStr = finalStripPunc.toLowerCase()
    //console.log(finalStrippedStr);
    let splitString = finalStrippedStr.split("");
    console.log(splitString);
    let reverseArray = splitString.reverse();
    //console.log(reverseArray);
    let finalReverseStr = reverseArray.join("");
    console.log(finalReverseStr);

    if (finalStrippedStr === finalReverseStr) {
        return true;
    }else return false;

    /*Cleaner way 
    const palindromes = function(string) {
        processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
        return (
            processedString
            .split("")
            .reverse()
            .join("") == processedString
        );
    }*/

};

// Do not edit below this line
module.exports = palindromes;
