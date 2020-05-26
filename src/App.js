import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ExampleInputNumber from 'pages/ExampleInputNumber';
import ExampleInputDate from 'pages/ExampleInputDate';
import ExampleBreadcrumbs from 'pages/ExampleBreadcrumbs';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/properties/:id" component={DetailsPage }/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route path="/example-number" component={ExampleInputNumber}/>
        <Route path="/example-date" component={ExampleInputDate}/>
        <Route path="/example-breadcrumb" component={ExampleBreadcrumbs}/>
      </Router>
    </div>
  );
}

export default App;
