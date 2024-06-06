import { useState } from "react";
import "./App.css";
import { Login } from "./views/login/login";
import Barranav from "./components/componentes-login/nav/barra-de-nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Barranav/>
      </div>
    </>
  );
}

export default App;
