import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createUser } from "../../actions/UserActions";

class Register extends Component {
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    this.props.createUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <p className="login-register-header">Zarejestruj konto</p>
          <hr></hr>
          <div className="form-group">
            <label className="login-register-labels">Nazwa Użytkownika</label>
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.login
              })}
              placeholder="Nazwa Użytkownika"
              name="login"
              value={this.state.login}
              onChange={this.onChange}
            />
            {errors.login && (
              <div className="invalid-feedback text-right">{errors.login}</div>
            )}
          </div>
          <div className="form-group">
            <label className="login-register-labels">Hasło</label>
            <input
              type="password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              placeholder="Hasło"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback text-right">
                {errors.password}
              </div>
            )}
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary button-width">
            Zarejestruj
          </button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUser }
)(Register);
