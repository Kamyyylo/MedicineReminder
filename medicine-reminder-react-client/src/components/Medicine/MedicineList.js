import React, { Component } from "react";
import Medicine from "./Medicine";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMedicinesForUser } from "../../actions/MedicineActions";

class MedicineList extends Component {
  componentDidMount() {
    this.props.getMedicinesForUser(this.props.match.params.username);
  }

  render() {
    let content;
    const { medicines } = this.props.medicines;
    const medicine = medicines.map(item => (
      <Medicine key={item.id} medicine={item} />
    ));
    const littleAlgorithm = medicine => {
      if (medicine < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            <p>
              Nie masz żadnych leków na swojej liście. Kliknij dodaj lek aby
              dodać przypominajkę
            </p>
          </div>
        );
      } else {
        return <div>{medicine}</div>;
      }
    };
    content = littleAlgorithm(medicine);
    return <div>{content}</div>;
  }
}

MedicineList.propTypes = {
  medicines: PropTypes.object.isRequired,
  getMedicinesForUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  medicines: state.medicines
});

export default connect(
  mapStateToProps,
  { getMedicinesForUser }
)(MedicineList);
