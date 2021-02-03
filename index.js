const currentPrice = document.querySelector("#currentPrice");
const totalCurrentValue = document.querySelector("#totalCurrentValue");
const numberBought = document.querySelector("#numberBought");
const purchasePrice = document.querySelector("#purchasePrice");
const percentage = document.querySelector("#percentage");
const indivTotalSilver = document.querySelector("#indivTotalSilver");
const indivCurrentCost = document.querySelector("#indivCurrentCost");
const indivCurrentVal = document.querySelector("#indivCurrentVal");
console.log(numberBought.value);

const getCurrentCost = () => {
  const boughtVal = numberBought.value;
  const purPrice = purchasePrice.value;

  let currentCost = 0;
  if (boughtVal === '') {
    currentCost = 0;
  } else {
    currentCost = boughtVal * purPrice;
  }
  console.log(currentCost)
  indivCurrentCost.innerHTML = currentCost;

};

// numberBought.addEventListener('unclick')

// window.addEventListener('click', (e) => {
//   e.stopPropagation();
  
// })

window.addEventListener('click', (e) => {
  getCurrentCost();
}); 

// const fetchSilverPrice = async () => {
//   try {
//     const config = {
//         headers: {'x-access-token': 'goldapi-3ldrukkm11plm-io', "Content-Type": "application/json"},
//         // redirect: 'follow'
//       };
//     const res = await axios.get(
//       "https://www.goldapi.io/api/XAG/USD", config
//     );
//     return res.data.ask
//   } catch (e) {
//     console.log("Axios: No data available for this pair");
//   }
// };

// const addCurrentPrice = async () => {
//   const currentPriceText = await fetchSilverPrice();
//   console.log(currentPriceText)
//   currentPrice.innerHTML = `<h2>Current Silver Price: ${currentPriceText}</h2>`

// }
// addCurrentPrice();

// const fetchTotalCurrentValue = () => {

// }
