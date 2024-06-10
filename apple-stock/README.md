# Stockify - All Things Stock!

## Application Demo
[Loom Link](https://www.loom.com/share/cfeb1a5a38a443f68930fe158b59b0fc?sid=dd0f0b66-d318-45f1-99aa-255a6d14d4a3)

## Style Guide
Font: Helvetica, Roboto
![Style Guide](https://github.com/WinexWolf/apple-stock/blob/801d0a2ae268af6d45b44366cc56d9ca87ceda96/apple-stock/src/assets/style-guide.png)

## Introduction

Stockify displays relevant stock market stats and details for companies including Apple, Goldman Sachs, Morgan Stanley and Citibank. This particular application displays key ratios( Market Cap, Shares Outstanding, P/E Ratio, etc), analyst estimates and a candlestick chart of Apple stocks starting from June 7, 2024.

## Tools Used

- React
- TypeScript
- CSS
- Material UI
- Axios
- Apex Charts

## Data Sources

- https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey={API_KEY}
- http://127.0.0.1:8000/financials

## How to get rid of the CORS error?

- Add `"proxy": "http://127.0.0.1:8000"` to package.json
- Run `npm install http-proxy-middleware --save`
- Create a `setUpProxy.js` like in the project and set the traget URL
- Update the API_URL to a relative path '/financials' and use axios to get data from the endpoint

## Getting Started

In the project directory, you can run:
### `npm i` or `yarn add `: To install all packages and libraries
### `npm start`: Runs the development server on [/localhost:3000](http://localhost:3000/)
### `docker pull soester10/unlevered-flask-dummy-financials:latest` : To pull the latest image of the flask server
### `docker run -p 8000:5000 soester10/unlevered-flask-dummy-financials`: Run the flask server
### [http://127.0.0.1:8000/financials](http://127.0.0.1:8000/financials) : Test this endpoint to fetch data

### `npm test`: Runs tests on code
### `npm run deploy`: To create a new build and update gh-pages




