import React from "react";
import whyusData from "../../data/whyus.data";
import WhyUsCard from "../../components/WhyUsCard";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row no-gutters">
          {whyusData.map((item, index) => (
            <WhyUsCard item={item} keyy={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
