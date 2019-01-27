import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Typography, Grow } from "@material-ui/core";
import SideNavs from "./SideNavs";

//Pages
import MainScreen from "../screens/MainScreen";
import Invoices from "../screens/Invoices";

withRouter(props => <Main {...props} />);

class Main extends Component {
  state = {
    navItems: [
      {

        id: 1,
        name: "Invoices",
        link: "/"
       
      },
      {
        id: 1,
        name: "Main Screen",
        link: "/main"
      }
    ]
  };

  render() {
    return (
      <div>
        
        <div className="menu_btn">
          <SideNavs NavItems={this.state.navItems} Component={Link} />
        </div>

        <Switch>
          <Route exact path="/" component={Invoices} />
          <Route path="/main" component={MainScreen} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
