import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="container App">
      <header>
        <Dictionary />
      </header>

      <footer>
        <a
          href="https://github.com/HamburgNinja/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open source code
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/HamburgNinja"
          target="_blank"
          rel="noreferrer"
        >
          HamburgNinja
        </a>
      </footer>
    </div>
  );
}

export default App;
