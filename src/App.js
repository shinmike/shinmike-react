import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Interests from './components/pages/interests';

// includes
import './assets/css/resume.min.css';
import { add, multiply } from './assets/js/resume.js';

class App extends Component {
  
  render() {
    console.log(add(2,3));
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/interests" component={Interests} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
