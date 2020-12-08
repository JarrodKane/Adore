import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { getProducts, getCat } from "./helpers/axios";

import Home from "./Home";
import List from "./List";
import Detail from "./Detail";
import Categories from "./Categories";
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

// Wanted the content to take up as much of the screen as it can with the footer at the bottom
const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  // Initially setting resource to an empty array
  const [resource, setResource] = useState([]);
  const [categories, setCategories] = useState([]);

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
    const products = await getProducts(id);
    setResource(products.data);
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
              <li>
                <Link to="/detail">Details</Link>
              </li>
            </ul>
          </nav>

          <Content>
            {/* {resource.length === 0 ? <Loader /> : <List data={resource.data} />} */}
            {categories.length === 0 ? (
              <></>
            ) : (
              <>
                <Categories callCat={callCat} data={categories} />
                {/* <List data={resource} /> */}
              </>
            )}

            {}
            <Switch>
              <Route path="/">
                <Home
                  categories={categories}
                  resource={resource}
                  callCat={callCat}
                />
              </Route>
              <Route path="/detail">
                <Detail />
              </Route>
            </Switch>
          </Content>
          <Footer />
        </Body>
      </div>
    </Router>
  );
}

export default App;
