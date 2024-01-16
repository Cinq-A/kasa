import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Error404 from './components/Error404';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;


