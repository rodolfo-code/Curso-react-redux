import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span>
        Desenvolvido por
        <i className="text-danger">
          <b> @</b>
        </i>
        <strong>
          Rodol<span className="text-danger">F</span>o
        </strong>
      </span>
    </footer>
  );
}

export default Footer;
