import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i>
        {props.title}
      </h1>
    </header>
  );
}

export default Header;
