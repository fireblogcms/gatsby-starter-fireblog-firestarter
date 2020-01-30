import React from "react";
import Navbar from "./Navbar";

function Header({ children }) {
  return (
    <section className="hero is-primary is-small is-bold">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">{children}</div>
      </div>
    </section>
  );
}

export default Header;
