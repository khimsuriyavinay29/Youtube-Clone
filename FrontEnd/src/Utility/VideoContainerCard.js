import React, { useEffect, useState, createContext } from "react";



export default function VideoContainerCard({ data, onVideoSelect }) {
  const handleVideoChange = () => {
    onVideoSelect(
      data.id.videoId,
      data.snippet.description,
      data.snippet.channelTitle
    );
    // localStorage.setItem("videoId", data.id.videoId);
  };

  return (
    <div
      className="container-fluid"
      style={{ cursor: "pointer" }}
      onClick={handleVideoChange}
    >
      <div className="row">
        <div className="col-3">
          <img className="w-100" src={data.snippet.thumbnails.high.url} />
        </div>
        <div className="col-9">
          <h3>{data.snippet.channelId}</h3>
          <p>{data.snippet.description}</p>
          <p>{data.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
}