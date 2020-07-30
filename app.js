let donutCount = 0;
let priceOfClicker = 100;
let priceOfMultiplier = 10;
let autoClickerCount = 0;
let multiplierCount = 0;


//game buttons 
const donutButton = document.getElementById("donut-button");
const autoClicker = document.getElementById("auto-clicker-button");
const multiplierButton = document.getElementById("multiplier-button");
const resetButton = document.getElementById("reset-button");
//upgrades
const autoClickerCountDiv = document.querySelector(".auto-clicker-count");
const autoClickerPriceDiv = document.querySelector(".auto-clicker-price");
const displayContainer = document.getElementById("donuts");
const multiplierPriceDiv = document.querySelector(".multiplier-price");
const multiplierCountDiv = document.querySelector(".multiplier-count");


console.log("Variable at render",donutButton);        //check  

//doughnut count
displayContainer.innerText = "Donut Count: " + donutCount;

// updates for upgrades
multiplierPriceDiv.innerText = "Current Price: " + priceOfMultiplier + " donuts";
autoClickerPriceDiv.innerText = "Current Price: " + priceOfClicker + " donuts";
multiplierCountDiv.innerText = "Purchased: " + multiplierCount;
autoClickerCountDiv.innerText = "Purchased: " + autoClickerCount;

donutButton.addEventListener("click", () =>{
  console.log("Donut Counter");                      //check
  console.log("Variable at click",donutButton);      //check
  donutCount += Math.pow(1.2, multiplierCount);
    displayContainer.innerText = Math.round(donutCount); 
});

// auto clicker and multiplier buttons
autoClicker.addEventListener("click", buyAutoClicker, buyMultiplier);
multiplierButton.addEventListener("click", buyMultiplier);

function buyAutoClicker() {
  if (donutCount >= priceOfClicker) {
    donutCount -= priceOfClicker;
    autoClickerCount += 1;
    priceOfClicker = Math.round(priceOfClicker * 1.25);
    displayContainer.innerText = "Donut Count: " + Math.round(donutCount)  
    autoClickerPriceDiv.innerText = "Current Price: " + priceOfClicker + " donuts";
    autoClickerCountDiv.innerText = "Purchased: " + autoClickerCount;
    if (autoClickerCount <= 1) {
      activateAutoClicker();
    }
  }
}

function buyMultiplier() {
  if (donutCount >= priceOfMultiplier) {
    donutCount -= priceOfMultiplier;
    multiplierCount += 1;
    priceOfMultiplier = Math.round(priceOfMultiplier * 1.25);
    displayContainer.innerText = "Donut Count: " + Math.round(donutCount) 
    multiplierCountDiv.innerText = "Purchased: " + multiplierCount;
    multiplierPriceDiv.innerText = "Current Price: " + priceOfMultiplier + " donuts";
  }
}

function activateAutoClicker() {
  setInterval( () => {
    donutCount += autoClickerCount * Math.pow(1.5, multiplierCount);
    displayContainer.innerText = "Donut Count: " + Math.round(donutCount)}, 1000);
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  location.reload();
}