import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createMedicine } from "../../actions/MedicineActions";

class AddMedicine extends Component {
  constructor() {
    super();
    this.state = {
      medicineName: "",
      expirationDate: "",
      timeOfTaking_1: "",
      timeOfTaking_2: "",
      timeOfTaking_3: "",
      medicineDescription: "",
      dosage: "",
      userName: "",
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
    const newMedicine = {
      medicineName: this.state.medicineName,
      expirationDate: this.state.expirationDate,
      timeOfTaking_1: this.state.timeOfTaking_1,
      timeOfTaking_2: this.state.timeOfTaking_2,
      timeOfTaking_3: this.state.timeOfTaking_3,
      medicineDescription: this.state.medicineDescription,
      dosage: this.state.dosage,
      userName: this.props.match.params.username
    };
    console.log(newMedicine);
    this.props.createMedicine(
      newMedicine,
      this.props.match.params.username,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nazwa Leku</label>
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.medicineName
              })}
              placeholder="Nazwa Leku"
              name="medicineName"
              value={this.state.medicineName}
              onChange={this.onChange}
            />
            {errors.medicineName && (
              <div className="invalid-feedback text-right">
                {errors.medicineName}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Data do spożycia</label>
            <input
              type="date"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.expirationDate
              })}
              name="expirationDate"
              value={this.state.expirationDate}
              onChange={this.onChange}
            />{" "}
            {errors.expirationDate && (
              <div className="invalid-feedback text-right">
                {errors.expirationDate}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">
              Pierwsza godzina podania leku
            </label>
            <input
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.timeOfTaking_1
              })}
              type="time"
              name="timeOfTaking_1"
              value={this.state.timeOfTaking_1}
              onChange={this.onChange}
            />
            {errors.timeOfTaking_1 && (
              <div className="invalid-feedback text-right">
                {errors.timeOfTaking_1}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">
              Druga godzina podania leku
            </label>
            <input
              className="form-control"
              type="time"
              name="timeOfTaking_2"
              value={this.state.timeOfTaking_2}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">
              Trzecia godzina podania leku
            </label>
            <input
              className="form-control"
              type="time"
              name="timeOfTaking_3"
              value={this.state.timeOfTaking_3}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Dawkowanie leku</label>
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.dosage
              })}
              placeholder="Dawkowanie leku"
              name="dosage"
              value={this.state.dosage}
              onChange={this.onChange}
            />
            {errors.dosage && (
              <div className="invalid-feedback text-right">{errors.dosage}</div>
            )}
          </div>

          <div className="form-group">
            <label>Opis leku, wskazówki</label>
            <textarea
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.medicineDescription
              })}
              placeholder="Opis leku, wskazówki"
              name="medicineDescription"
              value={this.state.medicineDescription}
              onChange={this.onChange}
            ></textarea>
            {errors.medicineDescription && (
              <div className="invalid-feedback text-right">
                {errors.medicineDescription}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Dodaj
          </button>
        </form>
      </div>
    );
  }
}

AddMedicine.propTypes = {
  createMedicine: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createMedicine }
)(AddMedicine);
