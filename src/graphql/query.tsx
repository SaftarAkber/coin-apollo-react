import { gql } from "@apollo/client";

export const GET_CRYPTOCURRENCY = gql`
  query price($_eq: String!) {
    markets(
      filter: {
        baseSymbol: { _eq: $_eq }
        quoteSymbol: { _in: ["USD", "USDT"] }
        marketStatus: { _eq: Active }
      }
    ) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
