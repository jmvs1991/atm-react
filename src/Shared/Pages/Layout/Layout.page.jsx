import React from "react";
import "./Layout.page.scss";

const Layout = ({ children }) => {
  return (
    <>
      <section id="Contenido">
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
