import React, { Component } from "react";
import Toolbar from "./Navigation/SideBar";
import { Header } from "./Screens/Header";

type LayoutState = {};

class Layout extends Component<{}, LayoutState> {
  render() {
    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <Header></Header>
      </React.Fragment>
    );
  }
}

export default Layout;
