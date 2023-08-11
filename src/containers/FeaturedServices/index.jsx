import React from "react";
import FeaturedServiceCard from "../../components/FeaturedServiceCard";
import featuredData from "../../data/featured.data";

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="featured-services section-bg">
      <div className="container">
        <div className="row no-gutters">
          {featuredData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <FeaturedServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
