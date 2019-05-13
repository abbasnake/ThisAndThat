import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosPage from './routes/TodosPage';
import StatisticsPage from './routes/StatisticsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={ TodosPage } />
      <Route path="/statistics" exact component={ StatisticsPage } />
      <Footer />
    </div>
  </Router>
);

export default App;
