import React from "react";

const FeaturedServiceCard = ({ item }) => {
  return (
    <div className="icon-box">
      <div className="icon">
        <i className={item.icon}></i>
      </div>
      <h4 className="title">
        <a href="">{item.title}</a>
      </h4>
      <p className="description">{item.text}</p>
    </div>
  );
};

export default FeaturedServiceCard;
