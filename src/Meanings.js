import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitions">
            <p>
              <strong>Definition</strong>
              <br />
              {definition.definition}
            </p>
            {definition.example && (
              <p>
                <strong>Example</strong>
                <br />
                {definition.example}
              </p>
            )}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
