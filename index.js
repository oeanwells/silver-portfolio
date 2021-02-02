var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-3ldrukkm11plm-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//
//
//
const currentPrice = document.querySelector('#currentPrice');


const fetchSilverPrice = async () => {
  try {
    const config = {
        headers: {'x-access-token': 'goldapi-3ldrukkm11plm-io', "Content-Type": "application/json"},
        // redirect: 'follow'
      };
    const res = await axios.get(
      "https://www.goldapi.io/api/XAG/USD", config
    );
    console.log(res);
    console.log(res.data.ask);
    currentPrice.innerHTML = `<h2>${res.data.ask}</h2>`
  } catch (e) {
    console.log("Axios: No data available for this pair");
  }
};
fetchSilverPrice();

// const getDadJoke = async () => {
//   const config = { headers: { Accept: "application/json" } };
//   const res = await axios.get("https://icanhazdadjoke.com/", config);
//   div.innerHTML = `<h2>${res.data.joke}</h2>`;
// };
