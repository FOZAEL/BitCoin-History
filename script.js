var currency = "BTC";
var url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;
var usd = document.querySelector(".usd");
function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    usd.innerHTML = response.data.rates.USD + " USD";
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("CB-VERSION", "2018-01-01");
  xhr.send();
}
makeRequest();