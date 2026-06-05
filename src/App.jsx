import React, { useState, useRef } from 'react';
import { Landing } from './components/Landing';
import { OurStory } from './components/OurStory';
import { ReasonsILoveYou } from './components/ReasonsILoveYou';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { FloatingHearts } from './components/FloatingHearts';
import './index.css';

function App() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const handleScroll = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStart = () => {
    sectionRefs[1].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <FloatingHearts />
      <ThemeToggle />
      <Navigation onScroll={handleScroll} />

      <main className="pt-16">
        {/* Landing Page */}
        <div ref={sectionRefs[0]}>
          <Landing onStart={handleStart} />
        </div>

        {/* Our Story */}
        <div ref={sectionRefs[1]}>
          <OurStory />
        </div>

        {/* Reasons I Love You */}
        <div ref={sectionRefs[2]}>
          <ReasonsILoveYou />
        </div>

        {/* Footer */}
        <footer className="py-12 px-4 text-center text-gray-500 border-t border-crimson-500/20">
          <p>Made with ❤️ for Seti</p>
          <p className="text-sm mt-2">© 2024 Our Love Story. All moments cherished forever.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
