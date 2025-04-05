function getPrice(color) {
    if (color === 'GoldPlatinum')
        return 40000;
    if (color === 'PinkGold')
        return 35000;
    if (color === 'SilverTitanium')
        return 30000;
    return 0;
}
function displayPrices() {
    var colors = ['GoldPlatinum', 'PinkGold', 'SilverTitanium'];
    var container = document.getElementById('prices');
    if (container) {
        colors.forEach(function (color) {
            var price = getPrice(color);
            var div = document.createElement('div');
            div.className = color;
            div.innerText = "".concat(color, " - \u20B9").concat(price);
            container.appendChild(div);
        });
    }
}
displayPrices();
console.log("\nDeveloped by: 22MH1A0539");
