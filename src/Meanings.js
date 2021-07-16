import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);

  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>Example: {definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
