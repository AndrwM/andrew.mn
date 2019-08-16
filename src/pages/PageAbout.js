import React, { Component } from "react";
import { Link } from "react-router-dom";
import Reveal from '../components/Reveal';

import WithPage from "../components/WithPage";
import Navigation from "../components/Navigation";

class PageAbout extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader()
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--large">
          Good Afternoon&nbsp;
          <span className="u-subtler" style={{fontWeight: 100}}>—</span>
        </h1>
        <p className="c-paragraph c-paragraph--xlarge">
        My name is Andrew McIntee.
        <br/>
        I am a product designer &amp; web engineer
        <br/>
        specializing in design systems.
        </p>
        <div className="u-margin-top-large">
          <Navigation />
        </div>
      </React.Fragment>
    );
  }

  render() {
    return(
      <React.Fragment>
      <section className="c-wrapper c-wrapper--slimmest u-padding-vertical-large">
        <div className="c-container">
          <h2 className="c-title c-title--small u-margin-top-small">Biography</h2>
          <p className="c-paragraph c-paragraph--large">
            I have over 8 years of experience in software development and most recently lead my product team.
          </p>
          <Reveal>
            <p className="c-paragraph">
              Hello! — My name is Andrew McIntee. I’m a digital product designer & web-engineer who specializes in building & nurturing design systems.
              I have been a remote-worker for over 4 years.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            Engineering chops
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            With my engineering experience and design experience my expertise is sitting on engineering team as an engineer’s designer or on a design team as a designer’s engineer. A liaison between two core assets of a software development company, having consistently jumped between both roles in my career.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            I worked for Division Of Labor
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            Previously, I lead design and UI systems at [Division Of Labor](http://www.divisionoflabor.xyz/) and I’m a partner at [Coindex Fund](http://coindex.fund/) , a cryptocurrency management service.
            Prior to this, I worked as a senior software designer at [The Iron Yard](https://newline.theironyard.com/) ,
            ran a freelance UI agency, and engineered brand experiences at [Organic](http://organic.com/) .
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            At the moment, I am based between the Southeast United States and Mexico City while I focus my efforts towards studying Spanish.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            Following my sabbatical, I am looking to join a medium-sized startup company. To continue nurturing an excellent software experiences, connecting: UI connecting, usability testing, engineering execution, design documentation, and company processes to create a culture of user experience excellence. In the interim, I am available for UI design or front-end engineering consulting engagements.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
            Unfortunately some of my past work is not available publicly. If you would like to see my portfolio, please email me.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="c-wrapper c-wrapper--slimmest u-padding-vertical-large">
        <div className="c-container">
          <p className="c-paragraph c-paragraph--sans c-paragraph--small">
            <span className="c-emoji">📬</span>&nbsp; Contact me at&nbsp;
            <a className="c-link" href="mailto:studio@andrew.mn">Studio@Andrew.mn</a>
            &nbsp;or by phone at&nbsp;
            <a className="c-link" href="mailto:studio@andrew.mn">(864) 915 0648</a>.
          </p>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageAbout);
