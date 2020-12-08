import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { getProducts, getCat } from "./helpers/axios";

import Home from "./Home";
import Detail from "./Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Some simple styled components for the overall body of the app

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 16px;
`;

function App() {
  // Initially setting resource to an empty array
  const [resource, setResource] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prod, setProd] = useState();
  // This keeps track of if there is an async in progress
  const [asyncNow, setAsyncNow] = useState(false);

  // This is called once at the load to get the initial data
  useEffect(() => {
    init();

    //console.log(resource);
    return () => {
      //cleanup;
    };
  }, []);

  // The initial call to get the basic
  const init = async () => {
    const categories = await getCat();

    setCategories(categories);
  };

  //Calling with categorie selected
  const callCat = async (id) => {
    const products = await getProducts(id, 0, setAsyncNow);
    setResource(products.data);
  };

  // This is called when someone clicks on a product to select, it will then update the route in the router
  //It sets the product to the one selected which updates the state for it
  const selectProd = (id) => {
    const foundProd = resource.data.filter((prod) => prod.id === id);
    setProd(foundProd);
  };

  return (
    <Router>
      <div className="App">
        <Body>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact>
              <Home
                categories={categories}
                resource={resource}
                callCat={callCat}
                selectProd={selectProd}
                asyncNow={asyncNow}
              />
            </Route>
            <Route path="/detail">
              <Detail prod={prod} categories={categories} />
            </Route>
          </Switch>
          <Footer />
        </Body>
      </div>
    </Router>
  );
}

export default App;
