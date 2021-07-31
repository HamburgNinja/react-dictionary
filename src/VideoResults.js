import React from "react";

import "./VideoResults.css";

export default function VideoResults(props) {
  if (props.videoResults) {
    return (
      <div className="VideoResults row">
        {props.videoResults.map(function (video) {
          return (
            <div
              className="col-12 col-sm-6 col-md-4"
              key={video.video_files[0].id}
            >
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
