import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={< Login />}></Route>
    <Route exact path='/home' element={< Home />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
