import React from "react";

import Footer from "../../containers/Footer/Footer.js";

import "./Layout.css";

const Layout = ({children}) => {
  return (
    <div className="app-layout">
      <main className="app-layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
