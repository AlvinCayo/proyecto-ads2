import { useState } from "react";
import "./App.css";
import { Login } from "./views/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Login/>
      </div>
    </>
  );
}

export default App;
