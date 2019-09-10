import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";
import SliderSmall from "../../components/SliderSmall";

import imageNewline from '../../assets/images/projects/newline/v2-5.png';
import imageWhiteboard from '../../assets/images/projects/newline/whiteboard.jpg';

import slider1_1 from '../../assets/images/projects/newline/mock-v1-1.png';
import slider1_2 from '../../assets/images/projects/newline/mock-v1-2.png';
import slider1_3 from '../../assets/images/projects/newline/mock-v1-3.png';
import slider1_4 from '../../assets/images/projects/newline/mock-v1-4.png';

import slider3_1 from '../../assets/images/projects/newline/wireframe-v1-1.png';
import slider3_2 from '../../assets/images/projects/newline/wireframe-v1-2.png';
import slider3_3 from '../../assets/images/projects/newline/wireframe-v1-3.png';
import slider3_4 from '../../assets/images/projects/newline/wireframe-v1-4.png';
import slider3_5 from '../../assets/images/projects/newline/wireframe-v1-5.png';

import slider2_1 from '../../assets/images/projects/newline/v2-1.png';
import slider2_2 from '../../assets/images/projects/newline/v2-2.png';
import slider2_3 from '../../assets/images/projects/newline/v2-3.png';
import slider2_4 from '../../assets/images/projects/newline/v2-4.png';
import slider2_5 from '../../assets/images/projects/newline/v2-5.png';
import slider2_6 from '../../assets/images/projects/newline/v2-6.png';
import slider2_7 from '../../assets/images/projects/newline/v2-7.png';

import imageStyleguide from '../../assets/images/projects/newline/components.png';

class PageNewline extends Component {
  constructor(props) {
    super(props);
    this.color = "#d2e8f1";
  }

  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: this.color
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="u-border-dark-bottom">
          <h1 className="c-title c-title--xlarge">
            Newline Education Platform
            <span className="c-title__subtle">2015 – 2017</span>
          </h1>
          <p className="c-paragraph">UI Design System, Front-End Engineering, RoR Development</p>
        </div>
        <div className="c-grid c-grid--stretch u-margin-top-large u-margin-bottom-tiny">
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">In Association With</h2>
            <p className="c-paragraph c-paragraph--sans-medium">The Iron Yard Product Team</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Responsible For</h2>
            <p className="c-paragraph c-paragraph--sans-medium">The Iron Yard's Product Team</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Project Length</h2>
            <p className="c-paragraph c-paragraph--sans-medium">2 Years</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">I Delivered</h2>
            <p className="c-paragraph c-paragraph--sans-medium">User Research, UI Comps, Design System, JS &amp; Ruby code.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">The Brief</h2>
            <h3 className="c-paragraph c-paragraph--large">Building an online supplement to The Iron Yard's immersive classroom.</h3>
            <div className="c-grid">
              <div className="c-grid__cell u-3/5--lap">
                <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017. As a product designer, I shaped the user-flow and feel of the application as directed by the company leadership's vision.</p>
                <p className="c-paragraph">The goal of The Iron Yard Online was to provide a centralized store of all class materials. Having a single application and store of all class content allowed us to guarantee the same quality classroom experience to all 15 campuses. In addition, having a central store of all student information all in one application allowed the company to create quality assurance models and run analytics on current and previous classrooms. The data, used to determine the health of campuses and classrooms quarter-over-quarter, became invaluable to the company leadership through my time there.</p>
                <p className="c-paragraph">Fellow product designer, Jeremiah and I, along with direction from the company's CTO Mason Stewart white-boarded the initial concepts and iterated them into high-fidelity wireframes.</p>
              </div>
              <div className="c-grid__cell u-2/5--lap">
                <img src={imageWhiteboard} style={{maxWidth: "550px"}} />
              </div>
            </div>
          </div>
        </section>
        <SliderLarge
          background={this.color}
          slides={[
          slider1_1,
          slider1_2,
          slider1_3,
          slider1_4,
        ]} />
        <section className="c-wrapper u-padding-bottom u-border-bottom">
          <div className="c-container">
            <h2 className="c-title c-title--small">The Iron Yard Online becomes Newline</h2>
            <h3 className="c-paragraph c-paragraph--large">The Iron Yard Online becomes Newline.</h3>
            <div className="u-padding-top">
              <div className="c-grid c-grid--large">
                <div className="c-grid__cell u-1/2--lap">
                  <img src={imageStyleguide} />
                </div>
                <div className="c-grid__cell u-1/2--lap">
                  <p className="c-paragraph u-border-bottom u-padding-bottom-small">As the The Iron Yard matured and its offering of services expanded from exclusively on-site, immersive education to also a full range of professional training and online education services. As purveyors of the learning software to the company, naturally our team was tasked with retooling The Iron Yard Online to an independent learning platform venture backed by The Iron Yard.</p>
                  <p className="c-paragraph c-paragraph--medium">Newline was born. Our new brand allowed us to experiment with new ways of messaging and interacting with our students that we previously couldn't do under The Iron Yard's stable brand. In addition to a new youthful, energetics aesthetic we also rethought many key user flows based on user behavior that we had collected and observed.</p>
                  <p className="c-paragraph c-paragraph--medium">In addition we rethought our interface building process; rather than created full prototypes and disassembling into components that could be rebuilt back into the initial static prototypes we opted to build and style the components as we saw fit and crafted the system around key user interface components of the project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SliderSmall
          slides={[
          <React.Fragment>
            <img src={slider3_1} className="u-margin-bottom-auto" />
            <h2 className="c-title c-title--small u-margin-top">Dashboard &amp; Onboarding</h2>
            <p className="c-paragraph c-paragraph--medium">The dashboard (left) displays the top-level stats for the student and their assigned course-work and the onboarding flow (right) steps the student through choosing a programming focus.</p>
          </React.Fragment>,
          <React.Fragment>
            <img src={slider3_2} className="u-margin-bottom-auto" />
            <h2 className="c-title c-title--small u-margin-top">Learning Paths, a collection of Units</h2>
            <p className="c-paragraph c-paragraph--medium">Each class at The Iron Yard routed a each student down Learning Paths (left), a collection of Units (right) with a primary learning objective. Each Unit contains lessons and assessments.</p>
          </React.Fragment>,
          <React.Fragment>
            <img src={slider3_3} className="u-margin-bottom-auto" />
            <h2 className="c-title c-title--small u-margin-top">Lessons</h2>
            <p className="c-paragraph c-paragraph--medium">Lessons included live coding Exercises and a collapsible wayfinding sidebar to allow the student to jump between lessons.</p>
          </React.Fragment>,
          <React.Fragment>
            <img src={slider3_5} className="u-margin-bottom-auto" />
            <h2 className="c-title c-title--small u-margin-top">Assessments</h2>
            <p className="c-paragraph c-paragraph--medium">The first concepts for Assessments. Each Assessment contained multiple choice, short answer, and code Exercises. Code Exercises were run and evaluated in real-time on our remote cluster of headless virtual machines. I played a key role here in building the front-end for the UI.</p>
          </React.Fragment>,
          <React.Fragment>
            <img src={slider3_4} className="u-margin-bottom-auto" />
            <h2 className="c-title c-title--small u-margin-top">Additional Views</h2>
            <p className="c-paragraph c-paragraph--medium">Additional views we worked on included instructor to student chat, one-off Units for students who wanted to learn a specific focus outside the scope of a Path, and homework feedback.</p>
          </React.Fragment>,
        ]} />
        <SliderLarge
          background={this.color}
          slides={[
          slider2_1,
          slider2_2,
          slider2_3,
          slider2_4,
          slider2_5,
          slider2_6,
          slider2_7,
        ]} />
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">Learn To Code, Change Your Career</h2>
            <p className="c-paragraph">In addition to the above, I also built custom interfaces for the Bootstrap-based administrative &amp; content-creation system used by course-writers, campus operations, and admissions. I led user interface design for the lightweight in-browser IDE, administrative course manager, student manager, and student-to-instructor messaging.</p>
            <p className="c-paragraph">It was a pleasure working with the Product team at The Iron Yard. During my time there we were able to bring a fun and interactive online classroom experience to over 10,000 students. Much love to everyone involved.</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageNewline);
