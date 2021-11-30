import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNavbar from "@/AppNavbar";
import AppFooter from "@/AppFooter";

class LayoutDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <div className="container">{this.props.children}</div>
        <AppFooter />
          <ToastContainer />
      </React.Fragment>
    );
  }
}

export default LayoutDashboard;
