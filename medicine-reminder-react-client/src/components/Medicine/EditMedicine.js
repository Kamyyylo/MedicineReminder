import React, { Component } from "react";
export default class EditMedicine extends Component {
    medicineObject;

    constructor() {
        super();
        this.state = {
          id: "",
          medicineName: "",
          expirationDate: "",
          timeOfTaking_1: "",
          timeOfTaking_2: "",
          timeOfTaking_3: "",
          medicineDescription: "",
          dosage: "",
          userName: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    onSubmit(e) {
        e.preventDefault();
        debugger;
        const newMedicine = {
            id: this.state.id,
            medicineName: this.state.medicineName,
            expirationDate: this.state.expirationDate,
            timeOfTaking_1: this.state.timeOfTaking_1,
            timeOfTaking_2: this.state.timeOfTaking_2,
            timeOfTaking_3: this.state.timeOfTaking_3,
            medicineDescription: this.state.medicineDescription,
            dosage: this.state.dosage,
            userName: this.props.match.params.username
          };
          debugger;
        this.props.createMedicine(
          this.medicineObject,
          this.props.match.params.username,
          this.props.history
        );
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    render(){
    
        if(this.state.medicineName === '') {
            this.medicineObject = JSON.parse(this.props.location.query.comments);
            this.state.id = this.medicineObject.id;
            this.state.medicineName = this.medicineObject.medicineName;
            this.state.expirationDate = this.medicineObject.expirationDate;
            this.state.medicineDescription = this.medicineObject.medicineDescription;
            this.state.timeOfTaking_1 = this.medicineObject.timeOfTaking_1;
            this.state.timeOfTaking_2 = this.medicineObject.timeOfTaking_2;
            this.state.timeOfTaking_3 = this.medicineObject.timeOfTaking_3;
            this.state.userName = this.medicineObject.userName;
            debugger;
        }
        debugger;
        return (
            <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nazwa Leku</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nazwa Leku"
              name="medicineName"
              defaultValue={this.state.medicineName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Data do spożycia</label>
            <input
              type="date"
              className="form-control form-control-lg"
              name="expirationDate"
              value={this.state.expirationDate}
              onChange={this.onChange}
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="example-datetime-local-input">
              Pierwsza godzina podania leku
            </label>
            <input
              className="form-control form-control-lg"
              type="time"
              name="timeOfTaking_1"
              value={this.state.timeOfTaking_1}
              onChange={this.onChange}
            />
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
              className="form-control form-control-lg"
              placeholder="Dawkowanie leku"
              name="dosage"
              value={this.state.dosage}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Opis leku, wskazówki</label>
            <textarea
            className="form-control form-control-lg"
              placeholder="Opis leku, wskazówki"
              name="medicineDescription"
              value={this.state.medicineDescription}
              onChange={this.onChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Edytuj
          </button>
        </form>
      </div>
        )
    }
}
