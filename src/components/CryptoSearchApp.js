import "./styles.css";
import { render } from "react-dom";
import { tickerInfo } from "./DataAPI";
import React, { Component } from "react";
import Select from "react-select";
import { options } from "./SearchCoin";

class CryptoSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: {
        symbol: "",
        price: "",
        priceChange: "",
        volume: "",
        priceOpen: "",
        priceHigh: "",
        priceLow: ""
      },
      BTC: {
        symbol: "",
        price: "",
        priceChange: "",
        volume: "",
        priceOpen: "",
        priceHigh: "",
        priceLow: ""
      },
      updateTime: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // Update selected currency data
    const rawData = tickerInfo(e.value);
    if (rawData[0].error === "Data not available") {
      alert("Data not available");
    }
    this.setState({
      updateTime: "Last Updated: " + Date(),
      USD: {
        symbol: e.value + "=> USD",
        price: "Price: " + rawData[1].lastPrice,
        priceChange:
          "Price Change: " +
          rawData[1].priceChangePercent +
          "% (" +
          rawData[1].priceChange +
          ")",
        volume: "Volume: " + Number(rawData[1].volume).toFixed(2),
        priceOpen: "Price Open: " + rawData[1].openPrice,
        priceHigh: "Price High: " + rawData[1].highPrice,
        priceLow: "Price Low: " + rawData[1].lowPrice
      },
      BTC: {
        symbol: e.value + "=> BTC",
        price: "Price: " + rawData[0].lastPrice + "BTC",
        priceChange:
          "Price Change: " +
          rawData[0].priceChangePercent +
          "% (" +
          rawData[0].priceChange +
          "BTC)",
        volume: "Volume: " + Number(rawData[0].volume).toFixed(2),
        priceOpen: "Price Open: " + rawData[0].openPrice + "BTC",
        priceHigh: "Price High: " + rawData[0].highPrice + "BTC",
        priceLow: "Price Low: " + rawData[0].lowPrice + "BTC"
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="bg-primary min-h-screen h-full">
          <div className="w-5/6 m-auto pt-12 ">
            <h1 className="m-auto my-12 text-center text-primary text-2xl">
              Cryptocurrency Search
            </h1>
            <div>
              <Select
                className="my-8"
                options={options}
                isSearchable={true}
                onChange={this.handleChange}
              />
              <span className="text-xs text-primary">
                {this.state.updateTime}
              </span>
            </div>

            <div className="mt-4 inline-grid w-1/2 h-full">
              <ol className="text-primary text-sm md:text-md lg:text-lg">
                {this.state.USD.symbol}
                <li>{this.state.USD.price} </li>
                <li>{this.state.USD.priceChange} </li>
                <li>{this.state.USD.volume}</li>
                <li>{this.state.USD.priceOpen}</li>
                <li>{this.state.USD.priceHigh}</li>
                <li>{this.state.USD.priceLow}</li>
              </ol>
            </div>
            <div className="inline-grid w-1/2 h-full">
              <ol className="text-primary text-sm md:text-md lg:text-lg">
                {this.state.BTC.symbol}
                <li>{this.state.BTC.price} </li>
                <li>{this.state.BTC.priceChange} </li>
                <li>{this.state.BTC.volume}</li>
                <li>{this.state.BTC.priceOpen}</li>
                <li>{this.state.BTC.priceHigh}</li>
                <li>{this.state.BTC.priceLow}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CryptoSearchApp;

// render(<CryptoSearchApp />, container);
