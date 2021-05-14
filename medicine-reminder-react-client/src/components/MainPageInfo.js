import React, { Component } from "react";

export default class MainPageInfo extends Component {
  render() {
    return (
      <div className="main-page-info container">
        <div className="jumbotron">
          <h1 className="main-page-text-header">
            Witaj na stronie Zażyj-pigułę.pl!
          </h1>
          <h3 className="main-page-text">
            Witaj! Czy wiesz, że jeśli założysz konto, a następnie się
            zalogujesz to już nigdy nie zapomnisz wziąć swoich leków ?
          </h3>
          <h3 className="main-page-text">
            Po zalogowaniu otrzymasz możliwość dodania leków, które regularnie
            zażywasz do przypominajki. Gdy użyjesz naszej aplikacji na smartfony
            będziesz otrzymywać powiadomienia 30 minut przed planowanym zażyciem
            twoich leków.
          </h3>
        </div>
      </div>
    );
  }
}
