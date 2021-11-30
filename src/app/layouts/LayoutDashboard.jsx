import * as React from "react";
import AppNavbar from "@/AppNavbar";
import AppFooter from "@/AppFooter";

class LayoutDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <div className="container">{this.props.children}</div>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default LayoutDashboard;
