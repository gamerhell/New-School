import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Campus from './components/Campus';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <Faculty />
        <Campus />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;