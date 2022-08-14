import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import Button from "@mui/material/Button";
import Card from "./components/Card";
import { AddBook } from "./features/book/AddBook";
import AllBooks from "./features/book/AllBooks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Card /> */}
      <AddBook />
      <AllBooks />
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
