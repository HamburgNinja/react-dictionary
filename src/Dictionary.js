import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <div className="dictionary">
      <form onSubmit={handleKeyword}>
        <div className="row">
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
  );
}
