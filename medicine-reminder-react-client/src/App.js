import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeforeLoginHeader from "./components/Layout/BeforeLoginHeader";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { Provider } from "react-redux";
import store from "./store";
import MedicineList from "./components/Medicine/MedicineList";
import AfterLoginHeader from "./components/Layout/AfterLoginHeader";
import AddMedicine from "./components/Medicine/AddMedicine";
import MainPageInfo from "./components/MainPageInfo";
import EditMedicine from "./components/Medicine/EditMedicine";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={BeforeLoginHeader} />
          <Route exact path="/" component={MainPageInfo} />
          <Route exact path="/login" component={BeforeLoginHeader} />
          <Route exact path="/register" component={BeforeLoginHeader} />
          <Route
            exact
            path="/medicines/:username"
            component={AfterLoginHeader}
          />
          <Route
            exact
            path="/addMedicine/:username"
            component={AfterLoginHeader}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addMedicine/:username" component={AddMedicine} />
          <Route exact path="/medicines/:username" component={MedicineList} />
          <Route exact path="/medicines/edit/:id" component={EditMedicine} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
