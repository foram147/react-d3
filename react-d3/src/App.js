import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Warning from "./Component/Warning";
import FilterBook from "./Component/FilterBook";

function App() {
  return (
    <div className="App">
      <Warning AlertMessage="Hello" />
      <div>
        <FilterBook />
      </div>
    </div>
  );
}

export default App;
