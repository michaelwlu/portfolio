import React, { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import { animateScroll as scroll } from 'react-scroll';
import ScrollToTop from './components/ScrollToTop';

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
    );
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > vh) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= vh) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll, setShowScroll]);

  return (
    <div className="bg-carrara">
      <Navbar />
      <Hero />
      <main className="w-full max-w-4xl mx-auto">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop showScroll={showScroll} />
    </div>
  );
};

export default Index;
