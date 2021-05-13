import React from "react";

export default function Skillentry(props) {
  const img_style = {
    marginRight: "0.5rem",
  };

  return (
    <>
      <div className="container">
        <div align="left">
          <img
            className="bullet-logo"
            src={props.img}
            alt={props.alt}
            style={img_style}
          />
          <strong>{props.text}</strong>
        </div>
      </div>
    </>
  );
}
