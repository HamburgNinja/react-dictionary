import React from "react";

import "./VideoResults.css";

export default function VideoResults(props) {
  console.log(props);
  if (props.videoResults) {
    return (
      <div className="VideoResults row">
        {props.videoResults.map(function (video, index) {
          return (
            <div className="col-4" key={index}>
              <video controls className="img-fluid">
                <source src={video.video_files[0].link} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
