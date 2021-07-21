import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      {props.phonetic.text}{" "}
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        ▶
      </a>
    </div>
  );
}
