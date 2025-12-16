
const parameters = [
  "priceChange",
  "openPrice",
  "lastPrice",
  "highPrice",
  "lowPrice"
];
const baseUrl = "https://api.binance.com";

const dataConversion = function (aTob, bToc) {
  // Convert data if BTC or USD is not relatively defined to the selected currency
  let aToc = {};
  for (let param of parameters) {
    aToc[param] = Number(aTob[param]) * Number(bToc[param]);
  }
  return aToc;
};

const addDollarSign = function (coinObj) {
  // Add dollar sign for price data
  for (let param of parameters) {
    let newNum = Number(coinObj[param]);
    if (isNaN(newNum)) {
      coinObj[param] = "N/A";
    } else if (newNum < 0) {
      coinObj[param] = "-$" + -newNum.toFixed(2);
    } else {
      coinObj[param] = "$" + newNum.toFixed(2);
    }
  }
  return coinObj;
};

const inversePrice = function (aTob) {
  // If only BTC->USD data exist, inverse data to obtain USD->BTC
  let bToa = {};
  for (let param of parameters) {
    bToa[param] = 1 / Number(aTob[0][param]);
  }
  return bToa;
};

const allTickers = function () {
  // Find all available tickers from Binance API
  let coinSymbol = [];
  let urlExchange = baseUrl + "/api/v1/exchangeInfo";
  let exchangeRequest = new XMLHttpRequest();
  exchangeRequest.onload = function () {
    let symbols = JSON.parse(exchangeRequest.response).symbols;
    for (let symbol of symbols) {
      if (!coinSymbol.includes(symbol.baseAsset)) {
        // If currency is not added to the list yet, add it
        coinSymbol.push(symbol.baseAsset);
      }
    }
  };
  exchangeRequest.onerror = function () {
    console.log("API error");
  };
  exchangeRequest.open("GET", urlExchange, false);
  exchangeRequest.send();
  return coinSymbol;
};
const availableTickers = allTickers();

const getData = function (urlIn) {
  // Get API data for url with the ticker in.
  // Return Object of the ticker
  // If not available, return []
  let newRequest = new XMLHttpRequest();
  let coinData = [];
  newRequest.onload = function () {
    let currentCoin = JSON.parse(newRequest.response);
    coinData.push(currentCoin);
  };
  newRequest.open("GET", urlIn, false);
  try {
    newRequest.send();
  } catch (err) {
    return [];
  }
  return coinData;
};

const tickerInfo = function (tickerIn) {
  // Obtain necessary conversion data from Binance API
  // Some data will have BTC->XXX, while some will have XXX->BTC
  // Try to obtain all possibilities, and find out which ones work.
  let query = baseUrl + "/api/v1/ticker/24hr?symbol=";
  let TickerInToBTC = getData(query + tickerIn + "BTC");
  let BTCToTickerIn = getData(query + "BTC" + tickerIn);
  let TickerInToUSD = getData(query + tickerIn + "USDT");
  let USDToTickerIn = getData(query + "USDT" + tickerIn);

  // Special cases (BTC & USD conversions)
  if (tickerIn === "BTC") {
    let BTCToUSD = getData(query + "BTCUSDT");
    let BTCToBTC = {};
    for (let param of parameters) {
      BTCToUSD[param] = Number(BTCToUSD[0][param]);
      BTCToBTC[param] = 1;
    }
    BTCToBTC["priceChange"] = 0;
    BTCToBTC["priceChangePercent"] = 0;
    BTCToBTC["volume"] = "NA";
    BTCToUSD = addDollarSign(BTCToUSD[0]);
    return [BTCToBTC, BTCToUSD];
  }
  if (tickerIn === "USDT") {
    let USDToBTC = getData(query + "BTCUSDT");
    USDToBTC = inversePrice(USDToBTC);
    let USDToUSD = {};
    for (let param of parameters) {
      USDToBTC[param] = Number(USDToBTC[param]);
      USDToUSD[param] = 1;
    }
    USDToUSD["priceChange"] = 0;
    USDToUSD["priceChangePercent"] = 0;
    USDToUSD["volume"] = "NA";
    USDToUSD = addDollarSign(USDToUSD);
    return [USDToBTC, USDToUSD];
  }

  // Some data will require inversion,
  // to have them in form of XXX->BTC or XXX->USD
  if (TickerInToBTC.length === 0 && BTCToTickerIn.length !== 0) {
    TickerInToBTC = inversePrice(BTCToTickerIn);
  } else {
    TickerInToBTC = TickerInToBTC[0];
  }
  if (TickerInToUSD.length === 0 && USDToTickerIn.length !== 0) {
    TickerInToUSD = inversePrice(USDToTickerIn);
  } else {
    TickerInToUSD = TickerInToUSD[0];
  }
  // For unavailable data,
  if (TickerInToBTC === undefined && TickerInToUSD === undefined) {
    return [
      {
        error: "Data not available"
      }
    ];
  } else if (TickerInToBTC === undefined) {
    let USDToBTC = getData(query + "USDTBTC");
    TickerInToBTC = dataConversion(TickerInToUSD, USDToBTC[0]);
  } else if (TickerInToUSD === undefined) {
    let BTCToUSD = getData(query + "BTCUSDT");
    TickerInToUSD = dataConversion(TickerInToBTC, BTCToUSD[0]);
  }
  return [TickerInToBTC, addDollarSign(TickerInToUSD)];
};

const options = [];
for (let tickers of availableTickers) {
  options.push({
    value: tickers,
    label: tickers.toUpperCase()
  });
}


export {
  availableTickers,
  tickerInfo,
  dataConversion,
  allTickers,
  addDollarSign,
  inversePrice,
  getData,
  parameters,
  baseUrl,
  options
};
