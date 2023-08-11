import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Title;
