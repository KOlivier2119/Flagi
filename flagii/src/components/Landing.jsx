import React from 'react';
import flags from '../../public/worlds.svg';

const Landing = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-slate-700 p-4">
      <div className="max-w-[90%] md:max-w-[50%] flex flex-col justify-center items-center space-y-6">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
          Welcome to <span className="animate-ping transition-all duration-1000">Flagii</span>...
        </h1>
        <p className="text-xl md:text-2xl text-center">
          Find the flag of every country that exists in the world and their capital city.
        </p>
        <img src={flags} alt="Holding Flag" className="w-[80%] md:w-[60%] max-h-[50vh] object-contain p-6" />
        <button className="w-[90%] md:w-[80%] bg-blue-500 text-white font-semibold text-xl md:text-2xl rounded-md px-3 py-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
