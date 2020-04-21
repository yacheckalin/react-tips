import React from "react";

const NavigationBar = ({ search }) => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo right">Logo</a>
      {search}
    </div>
  </nav>
);

export default NavigationBar;
