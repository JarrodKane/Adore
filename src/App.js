import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { getProducts } from "./helpers/axios";

import List from "./List";
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

// Wanted the content to take up as much of the screen as it can with the footer at the bottom
const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  // Initially setting resource to an empty array
  const [resource, setResource] = useState([]);

  return (
    <Router>
      <div className="App">
        <Body>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/list">Home</Link>
              </li>
              <li>
                <Link to="/detail">Details</Link>
              </li>
            </ul>
          </nav>

          <Content>
            <button
              onClick={() => {
                getProducts();
              }}
            >
              CLICK
            </button>
            <Switch>
              <Route path="/list">
                <List />
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
