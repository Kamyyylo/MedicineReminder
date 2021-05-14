import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AfterLoginHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <p className=" site-name">Zażyj-pigułę.pl</p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link add-view-medicine"
                  to={`/addMedicine/${this.props.match.params.username}`}
                >
                  Dodaj lek
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link add-view-medicine"
                  to={`/medicines/${this.props.match.params.username}`}
                >
                  Wyświetl listę leków
                </Link>
              </li>
            </ul>
          </div>
          <p className="user-name">{this.props.match.params.username}</p>
          <Link to="">
            <button type="button" className="btn btn-outline-dark float-right">
              Wyloguj
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
