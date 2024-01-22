import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './Apropos';
import Error404 from './Error404';
import Home from './Home';
import  Details from './Details';

function LesRoutes(){
    return (
        <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
        </div>
    );
};

export default LesRoutes;