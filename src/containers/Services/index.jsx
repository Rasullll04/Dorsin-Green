import React from "react";
import Title from "../../components/Title";
import servicesData from "../../data/services.data";
import ServiceCard from "../../components/ServiceCard";
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <Title
          title="SERVICES"
          text={`Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.`}
        />
        <div className="row">
          {servicesData.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
