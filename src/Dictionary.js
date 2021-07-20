import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="dictionary">
        <h1>DICTIONARY 📚</h1>
        <form onSubmit={handleKeyword}>
          <div className="row search">
            <div className="col-10">
              <input
                type="search"
                className="form-control"
                placeholder="What would you like to look up?"
                onChange={updateKeyword}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="search" className="btn button mb-2" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
