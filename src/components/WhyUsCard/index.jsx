import React from "react";

const WhyUsCard = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6 content-item">
      <span>{item.number}</span>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );
};

export default WhyUsCard;
