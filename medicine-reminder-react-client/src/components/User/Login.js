import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/UserActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      login: this.state.login,
      password: this.state.password
    };
    this.props.getUser(newUser.login, newUser.password, this.props.history);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <p className="login-register-header">
            Zaloguj się żeby korzystać z serwisu
          </p>
          <hr></hr>
          <div className="form-group">
            <label className="login-register-labels">Nazwa Użytkownika</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nazwa Użytkownika"
              name="login"
              value={this.state.login}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="login-register-labels">Hasło</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Hasło"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary button-width">
            Zaloguj
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(Login);
