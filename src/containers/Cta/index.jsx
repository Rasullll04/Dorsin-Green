import React from "react"
import Btn from "../../components/Btn";
function Cta (){
    return (
      <section id="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <Btn/>
          </div>
        </div>
      </section>
    );
}
export default Cta;