import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import About from './routes/about/about.component';
import Shop from './routes/shop/shop.component';


const App = () => {

return (
  <Routes>
    <Route path='/' element={<Navigation />} >
    <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />   
      <Route path="about" element={<About />} />   
      <Route path="auth" element={<Authentication />} />   
    </Route>
  </Routes>
);
};

export default App;

