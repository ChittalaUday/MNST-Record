var manufacturer = [{ id: "Samsung", price: 150 }, { id: "Nokia", price: 200 }, { id: "Oppo", price: 250 }, { id: "Realme", price: 200 }];
var test;
function MyFunction() {
    test = manufacturer.filter(function (x) { return x.price >= 200; });
}
MyFunction();
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var item = test_1[_i];
    console.log(item.id);
}
console.log("\nDeveloped by: 22MH1A0539");
