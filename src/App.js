import React, { PureComponent } from 'react';
import PlanetsTable from './components/table';
import './App.css';

export default class App extends PureComponent {
  render() { 
    return(
      <div className="App">
        <header className="App-header">
          <p>
            List of Planets and Moons
          </p>
        </header>
        <PlanetsTable/>
      </div>
    );
  }
}


