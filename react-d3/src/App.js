import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Books from "../src/data/fantasy.json";
import { Container } from "react-bootstrap";
import BookList from "./Component/BookList";
import SingleBook from "./Component/SingleBook";
import Warning from "./component/Warning";

function App() {
  console.log("Singlebook: ", SingleBook);
  return (
    <div className="App">
      <Container>
        <Warning AlertMessage="Hello" />
        <SingleBook book={Books[0]} />
      </Container>
      <BookList Books={Books} />
    </div>
  );
}

export default App;
