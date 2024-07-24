import React from "react";
import Button from "components/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browser-by")}`}>
                <Button className="nav-link" type="link" href="">
                  Browse by
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/Stories")}`}>
                <Button className="nav-link" type="link" href="">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="">
                  Agent
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
