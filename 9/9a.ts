type ColorType = 'GoldPlatinum' | 'PinkGold' | 'SilverTitanium';

function getPrice(color: ColorType): number {
  if (color === 'GoldPlatinum') return 40000;
  if (color === 'PinkGold') return 35000;
  if (color === 'SilverTitanium') return 30000;
  return 0;
}

function displayPrices() {
  const colors: ColorType[] = ['GoldPlatinum', 'PinkGold', 'SilverTitanium'];
  const container = document.getElementById('prices');

  if (container) {
    colors.forEach(color => {
      const price = getPrice(color);
      const div = document.createElement('div');
      div.className = color;
      div.innerText = `${color} - ₹${price}`;
      container.appendChild(div);
    });
  }
}

displayPrices();
console.log("\nDeveloped by: 22MH1A0539");
