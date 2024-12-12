import React from 'react';
import Scene from './components/Canvas/Scene';
import Navigation from './components/Layout/Navigation';

function App() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <Scene />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="text-center space-y-6 p-8 bg-black/30 backdrop-blur-lg rounded-xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Creative Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Bringing ideas to life through code and design
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-colors duration-200">
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;