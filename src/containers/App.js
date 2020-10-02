import React from 'react';
import './App.css';
import FetchAPI from './FetchAPI/FetchAPI';

class App extends React.Component{

  // Fetch data from api
  
  render(){
    return (
      <div className="App">
        <FetchAPI />
      </div>
    );
  }
}

export default App;
