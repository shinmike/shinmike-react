import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Projects</h1>
        <p>In my spare time, I enjoy working on things that are personally interesting and challenging. Some side projects that
        I've collaborated on are:
        <li>
            <a href="https://www.outofofficehours.com">Out of Office Hours</a>, a space for connecting tech mentees with tech mentors.</li>
          <li>
            <a href="#">Emily Curated Couples</a>, a fictitous dating website.</li>
        </p>
        <p>
          <mark>I’m currently taking on freelance web development work. If you’d like to work together, <a className="hover-black" href="mailto:shinmike90@gmail.com">please get in touch</a>.</mark>
        </p>
      </div>
    );
  }
}

export default Projects;