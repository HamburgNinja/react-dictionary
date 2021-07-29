import React, { useState } from "react";
import Results from "./Results";
import PhotoResults from "./PhotoResults";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photoResults, setphotoResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePictureResponse(response) {
    setphotoResults(response.data.photos);
  }

  function handleKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018d721743e3d440938d04f302b89a70bc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePictureResponse);
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
      <div className="resultDisplay">
        <Results results={results} />
        <PhotoResults photoResults={photoResults} />
      </div>
    </div>
  );
}
