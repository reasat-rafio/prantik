import React, { Component } from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Intoduction/Introduction";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import RunningProject from "./components/RunningProject/RunningProject";
import OurProject from "./components/OurProject/OurProject";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Topnav from "./components/Header/Topnav";
import About from "./components/About/About";
import More from "./components/More/More";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  state = {
    SideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    try {
      this.setState((prevState) => {
        return { SideDrawerOpen: !prevState.SideDrawerOpen };
      });
    } catch (err) {
      console.log(err);
    }
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    return (
      <div>
        <Router>
          <Topnav drawerToggleClickHandler={this.drawerToggleClickHandler} />

          <SideDrawer
            click={this.backdropClickHandler}
            show={this.state.SideDrawerOpen}
          />
          <Switch>
            <Route path="/home">
              <Header />
              {this.state.SideDrawerOpen ? <Backdrop /> : null}
              <Introduction />
              <RunningProject />
              {/* <ImgSlider /> */}
              <OurProject />
              <Footer />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/more">
              <More />
            </Route>
            <Route exact path="/">
              <Header />
              {this.state.SideDrawerOpen ? <Backdrop /> : null}
              <Introduction />
              <RunningProject />
              {/* <ImgSlider /> */}
              <OurProject />
              <Footer />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
