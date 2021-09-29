import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Books from "../src/data/fantasy.json";
import { Container } from "react-bootstrap";
import BookList from "./component/BookList";
import SingleBook from "./component/SingleBook";
import Warning from "./component/Warning";
import MyBadge from './component/MyBadge'

function App() {
  console.log("Singlebook: ", SingleBook);
  return (
    <div className="App">
      <Container>
        <Warning AlertMessage="Hello" />
        <MyBadge variant="info" text="Look at all these books!"/>
        <SingleBook book={Books[0]} />
      </Container>
      <BookList Books={Books} />
    </div>
  );
}

export default App;
