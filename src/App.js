import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ExampleInputNumber from 'pages/ExampleInputNumber';
import ExampleInputDate from 'pages/ExampleInputDate';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/example-number" component={ExampleInputNumber}/>
        <Route exact path="/example-date" component={ExampleInputDate}/>
      </Router>
    </div>
  );
}

export default App;
