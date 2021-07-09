import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleKeyword(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
          <div class="col-2">
            <input type="submit" value="search" className="btn button mb-2" />
          </div>
        </div>
      </form>
    </div>
  );
}
