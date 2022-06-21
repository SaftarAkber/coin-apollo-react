# Frontend Developer Test Assignment

Create a website that will display the prices of different cryptocurrencies. The prices will be fetched from a 3rd party GraphQL API service.

Task description:
- Use React, Apollo, TypeScript and hooks.
- Create a website that looks similar to preview.png.
- The required images are in “assets” folder.
- The exact colours, fonts and text sizes used are not important.
- User can add cryptocurrencies to the list by entering their codes ("BTC", "XRP", BNB" etc.)
- User can see the list of added currencies together with their EUR prices.
- User can remove the cryptocurrencies from the list.
- The EUR price is fetched from an API service.
- Push your code to Github, make your repository private, share it to Github user kasparaasamets.

An example query to fetch the current EUR value of BTC currency:

```
https://api.blocktap.io/graphql
query price {
  markets(filter:{ baseSymbol: {_eq:"BTC"} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
```

You can explore the Graphiql interface for that API at https://api.blocktap.io/graphiql
Blocktap.io is a third party service that might require registration.
You may also use any other GraphQL API service to fetch the prices from.

Sample JSON response from the request above:
```
  {
  "data": {
    "markets": [
      {
        "marketSymbol": "Binance:BTC/EUR",
        "ticker": {
          "lastPrice": "8791.81000000"
        }
      },  
      {
        "marketSymbol": "BinanceJe:BTC/EUR",
        "ticker": {
          "lastPrice": "8814.64000000"
        }
      },
      {
        "marketSymbol": "Bitfinex:BTC/EUR",
        "ticker": {
          "lastPrice": "8757.80000000"
        }
      },
...
```

You can ignore the different markets in the API response and just use, for example, the price from the first market. So markets don’t matter in the context of this test assignment.
