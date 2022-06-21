import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../header/header";
import Main from "../main/Main";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import Search from "../search/Search";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.blocktap.io/graphql",
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <Main />
        <Header />
      </ApolloProvider>
    </Router>
  );
};

export default App;
