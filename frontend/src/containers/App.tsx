import * as React from 'react';
import { injectGlobal } from 'styled-components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from 'screens/Home';
import CityScreen from 'screens/City';
import SearchScreen from 'screens/Search';

// can be injected from an external file, leaving here for the demo
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/weather/:woeid" component={CityScreen} />
          <Route exact path="/search/:keyword" component={SearchScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
