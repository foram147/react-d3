import "./App.css";

import Books from "../src/data/fantasy.json";
import { Container } from "react-bootstrap";
import Warning from './component/Warning'

function App() {
  return (
    <Container>
       <Warning AlertMessage="Hello"/>
      <div>
      </div>
    </Container>
  );
}

export default App;
