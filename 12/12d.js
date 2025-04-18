function sortArray(arr) {
    return arr.slice().sort(function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        }
        else {
            return a.toString().localeCompare(b.toString());
        }
    });
}
var numberArray = [5, 2, 9, 1, 7];
var stringArray = ["banana", "apple", "cherry", "date"];
var sortedNumbers = sortArray(numberArray);
var sortedStrings = sortArray(stringArray);
console.log("Sorted Numbers:", sortedNumbers);
console.log("Sorted Strings:", sortedStrings);
console.log("Developed by: 23MH5A0505");
//console.log("Developed by: 22MH1A0539");
