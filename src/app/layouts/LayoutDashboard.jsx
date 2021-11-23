import * as React from "react";
import AppNavbar from "@/AppNavbar";
import AppFooter from "@/AppFooter";

class LayoutDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        {this.props.children}
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default LayoutDashboard;
