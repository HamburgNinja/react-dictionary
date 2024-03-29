import React, { useState } from "react";
import Results from "./Results";
import PhotoResults from "./PhotoResults";
import VideoResults from "./VideoResults";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("dictionary");
  let [results, setResults] = useState(null);
  let [error, setError] = useState(false);
  let [photoResults, setPhotoResults] = useState(null);
  let [videoResults, setVideoResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    setError(false);
  }

  function handleDictionaryError() {
    setResults(null);
    setError(true);
  }

  function handlePhotoResponse(response) {
    setPhotoResults(response.data.photos);
  }

  function handleVideoResponse(response) {
    setVideoResults(response.data.videos);
  }

  function handleKeyword(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(handleDictionaryError);

    let pexelsApiKey =
      "563492ad6f917000010000018d721743e3d440938d04f302b89a70bc";
    let pexelsPhotosApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let pexelsVideosApiUrl = `https://api.pexels.com/videos/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsPhotosApiUrl, { headers: headers })
      .then(handlePhotoResponse);
    axios
      .get(pexelsVideosApiUrl, { headers: headers })
      .then(handleVideoResponse);
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <div className="dictionary">
          <h1>Dictionary</h1>
          <form onSubmit={handleKeyword}>
            <div className="row justify-content-center search">
              <div className="col-10 col-md-6">
                <input
                  autoFocus
                  type="search"
                  className="form-control"
                  placeholder="Enter a word"
                  onChange={updateKeyword}
                />
              </div>
              <div className="col-10 col-md-2">
                <input
                  type="submit"
                  value="search"
                  className="btn button mb-2"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="resultDisplay">
          {error ? (
            <p className="error-message">
              Sorry, your word could not be found in the dictionary!
            </p>
          ) : (
            <Results results={results} />
          )}
          <PhotoResults photoResults={photoResults} />
          <VideoResults videoResults={videoResults} />
        </div>
      </div>
    );
  } else {
    setLoaded(true);
    search();
    return null;
  }
}
