import React from "react";

import "./PhotoResults.css";

export default function PhotoResults(props) {
  console.log(props.photoResults);

  if (props.photoResults) {
    return (
      <div className="PhotoResults row">
        {props.photoResults.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} alt="" className="img-fluid" />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
