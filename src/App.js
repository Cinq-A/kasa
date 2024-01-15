import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/header';
import ImageAccueil from './components/imageAccueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Error404 from './components/Error404';

const Home = () => (
  <div className="App">
    <Header />
    <ImageAccueil />
    <Gallery />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;


