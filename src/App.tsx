import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './landing_page/Home';
import Products from './landing_page/Products';
import About from './landing_page/About';
import Team from './landing_page/Team';
import Contact from './landing_page/Contact';
import MessageForm from './landing_page/ContactForm'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
             
            <Route path="/contact" element={<Contact />} />

            <Route path="/messageForm" element={<MessageForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;