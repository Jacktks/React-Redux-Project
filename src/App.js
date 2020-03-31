import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';


const Hatpage = () => {
  return <h1>Hatpage!</h1>
}
function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/hats" component={Hatpage}/>
        </Switch>
    </div>
  );
}

export default App;
