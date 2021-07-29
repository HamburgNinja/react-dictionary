import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p>{props.phonetic.text}</p>
      <audio controls src={props.phonetic.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}
