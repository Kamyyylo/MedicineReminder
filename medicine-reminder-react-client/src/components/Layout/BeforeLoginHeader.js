import React, { Component } from "react";
import { Link } from "react-router-dom";

class BeforeLoginHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <p className=" site-name ">Weź-lek.pl</p>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item add-view-medicine">
                <Link className="nav-link" to="/login">
                  Logowanie
                </Link>
              </li>

              <li className="nav-item add-view-medicine">
                <Link className="nav-link" to="/register">
                  Rejestracja
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default BeforeLoginHeader;
