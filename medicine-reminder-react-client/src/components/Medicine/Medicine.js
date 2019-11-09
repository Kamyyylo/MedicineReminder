import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMedicine } from "../../actions/MedicineActions";

class Medicine extends Component {
  onDeleteButtonClick(id) {
    this.props.deleteMedicine(id);
  }

  render() {
    const { medicine } = this.props;
    return (
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="width-30 ">
                <table className="width-100">
                  <tbody>
                    <tr>
                      <td className="width-40 medicine-elements-headers ">
                        Lek:
                      </td>
                      <td className="medicine-elements">
                        {medicine.medicineName}
                      </td>
                    </tr>
                    <tr>
                      <td className="width-40 medicine-elements-headers">
                        Dawka:
                      </td>
                      <td className="medicine-elements">{medicine.dosage}</td>
                    </tr>
                    <tr>
                      <td className="width-40 medicine-elements-headers">
                        Data do:
                      </td>
                      <td className="medicine-elements">
                        {medicine.expirationDate}
                      </td>
                    </tr>
                    <tr>
                      <td className="width-40 medicine-elements-headers">
                        Godzina przyjęcia:
                      </td>
                      <td className="medicine-elements">
                        {medicine.timeOfTaking_1}
                      </td>
                    </tr>
                    <tr>
                      <td className="width-40 medicine-elements-headers">
                        Godzina przyjęcia:
                      </td>
                      <td className="medicine-elements">
                        {medicine.timeOfTaking_2}
                      </td>
                    </tr>
                    <tr>
                      <td className="width-40 medicine-elements-headers">
                        Godzina przyjęcia:
                      </td>
                      <td className="medicine-elements">
                        {medicine.timeOfTaking_3}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="opis ">{medicine.medicineDescription}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger delete-button float-right"
                  onClick={this.onDeleteButtonClick.bind(this, medicine.id)}
                >
                  Usuń
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
Medicine.propTypes = {
  deleteMedicine: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMedicine }
)(Medicine);
