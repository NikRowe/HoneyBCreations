import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Components/HeaderComponent'
import Home from './Components/HomeComponent'
import About from './Components/AboutComponent'
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </div >
  );
}
