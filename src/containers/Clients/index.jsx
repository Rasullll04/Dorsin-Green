import React from "react";
import Title from "../../components/Title";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <Title
          title="Our Clients"
          text={` Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.`}
        />
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-7.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-8.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
