import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch"
      data-aos="zoom-in"
      data-aos-delay={100}
    >
      <div className={item.color}>
        {item.icon}
        <h4>
          <a href>{item.title}</a>
        </h4>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
