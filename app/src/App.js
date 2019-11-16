import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/Sidebar'
import HomeScreen from './screens/HomeScreen'
import WeatherScreen from './screens/WeatherScreen'
import 'semantic-ui-css/semantic.min.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router >
      <div className="App">
         <Sidebar/>
        <Switch>
          <Route exact path="/Home">
          <HomeScreen/>
          </Route>


          <Route exact path="/Weather">
         <WeatherScreen/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

