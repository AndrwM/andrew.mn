import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";

// --- Partials
import Footer from "./pages/partials/Footer";
import Aside from "./pages/partials/Aside";

// --- Components
import Breadcrumb from "./components/Breadcrumb";

// --- Assets
import "./assets/fonts/Graphik-Regular-Web.woff"
import "./assets/fonts/Graphik-Light-Web.woff"
import "./assets/stylesheets/main.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorized: (window.location.hostname == "localhost") ? true : false,
      asideActive: (window.innerWidth > 710),
      theme: "#f1f9fc",
// -- Header Settings ---
      headerContent: null,
      headerHeight: null,
      headerKey: 0,
// -- Header Settings ---
    };

    this.refHeader = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When New Header Content Is Rendered:
    // - Force React to repaint header with a new `key` to trigger css animation
    // - Set header bg height dynamically if a new height has not been provided
    if (prevState.headerContent !== this.state.headerContent){
      this.setState({headerKey: this.state.headerKey + 1});

      if (prevState.headerHeight === this.state.headerHeight){
        this.setState({headerHeight: this.refHeader.current.clientHeight});
      }
    }
  }

  setAppState = (newState) => {
    this.setState(newState);
  }

  renderHeader() {
    return(
      <header className="c-header" ref={this.refHeader}>
        <div className="c-header__background" style={{height: this.state.headerHeight, backgroundColor: this.state.theme}} />
        <div className="c-header__content" key={this.state.headerKey}>
          <div className="c-container" children={this.state.headerContent} />
        </div>
      </header>
    );
  }

  renderPage() {
    return Routes.map(({ path, PageComponent, isPublic }) => (
      <Route exact key={path} path={path} render={() =>
        <PageComponent
          setAppState={this.setAppState}
          authorized={this.state.authorized ? true : isPublic}
        />
      }/>
    ))
  }

  render() {
    return (
      <HashRouter>
        <div
          className={`c-page ${this.state.asideActive ? "" : "c-page--collapsed"}`}
          style={{"--theme": this.state.theme}}
        >
          <div className="c-notice">
            Pardon the dust! This site is in *active* development.
          </div>
          <Aside asideActive={this.state.asideActive} setAppState={this.setAppState} />
          <div className="c-page__content">
            {/* <Route path="/:subpage/" render={() => <Breadcrumb />} /> */}
            <Breadcrumb />
            {this.renderHeader()}
            {this.renderPage()}
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
