import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './screens/Home';
import Blog from './screens/Blog';
import SinglePost from './screens/SinglePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
