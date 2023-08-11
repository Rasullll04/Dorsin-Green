import React from "react";
import navbarData from "../../data/navbar.data";
const Navbar = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Green</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              {navbarData.map((item, index) =>
                item.children ? (
                  <li className="dropdown">
                    <a href="#">
                      <span>{item.title}</span>{" "}
                      <i className="bi bi-chevron-down" />
                    </a>
                    {item.children && (
                      <ul>
                        {item.children.map((child, index) =>
                          child.children ? (
                            <li className="dropdown">
                              <a href="#">
                                <span>{child.title}</span>{" "}
                                <i className="bi bi-chevron-right" />
                              </a>
                              <ul>
                                {child.children.map((subChild, index) => (
                                  <li key={index}>
                                    <a href={subChild.path}>{subChild.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={index}>
                              <a href={child.path}>{child.title}</a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <a className="nav-link scrollto " href={item.path}>
                      {item.title}
                    </a>
                  </li>
                )
              )}
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
