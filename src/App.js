import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about';
import Projects from './pages/apps';
import Home from './pages/home';
import Resume from "./pages/resume";
import ContactInfo from './pages/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path= "/resume" component={Resume}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactInfo}/>

        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

export default App;
