import React, { useState } from "react";
import "../search/search.css";
import { useLazyQuery } from "@apollo/client";
import cup from "../assets/icon.svg";
import { GET_CRYPTOCURRENCY } from "../graphql/query";
import { Row } from "react-bootstrap";
import Input from "components/Input";

function Search() {
  const [cryptoSearch, setCryptoSearch] = useState("");
  const [getCurrency, { loading, data, error }] = useLazyQuery(
    GET_CRYPTOCURRENCY,
    {
      variables: { _eq: cryptoSearch },
    }
  );

  if (error) return <h1> Error found!</h1>;
  if (data) {
    console.log(data);
  }
  return (
    <div className="prices">
      <div className="search">
        <Input handleChange={(event) => setCryptoSearch(event.target.value)} label="CRYPTOCURRENCY CODE" value={cryptoSearch} />
        <button onClick={() => getCurrency()}>Add</button>
        <p>
          Use of this service is subject to terms and conditions.
        </p>
      </div>
      <div className="crypto-list">
        {data && data.markets.map((item: any, index: number) => {
          return <div className="crypto-item" key={index}>
            <div className="crypto-item__container">
              <img src={cup} alt="coinImage" />
              <div className="crypto-item__text">
                <div className="crypto-item__text__symbol">{item.marketSymbol}</div>
                <div className="crypto-item__text__price">{item.ticker?.lastPrice} &euro;</div>
              </div>
            </div>
            <div className="crypto-item__close">
              <span>&times;</span>
            </div>
          </div>
        })
        }
      </div>
    </div>
  );
}

export default Search;
