import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);

  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitions">
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            {definition.example && (
              <p>
                <strong>Example:</strong> {definition.example}
              </p>
            )}
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
