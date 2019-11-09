import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import medicineReducer from "./medicineReducer";

export default combineReducers({
  errors: errorReducer,
  user: userReducer,
  medicines: medicineReducer
});
