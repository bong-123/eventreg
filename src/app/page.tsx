"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Small delay for entrance effect
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_center,_#4a00e0_0%,_#8e2de2_50%,_#ff6bcb_100%)] text-white transition-all duration-1000 ease-in-out overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-white/10 rounded-full absolute top-10 left-20 animate-pulse-slow blur-3xl"></div>
        <div className="w-96 h-96 bg-purple-300/20 rounded-full absolute bottom-20 right-10 animate-pulse-slow blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-white/95 backdrop-blur-md shadow-xl p-5 flex justify-between items-center fixed top-0 z-20 transition-all duration-700 ease-in-out transform hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 transition-transform transform hover:scale-110 duration-300">
          🎉 EventSphere
        </h2>
        <nav className="flex gap-6 text-base font-medium">
          <Link href="/" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/event" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Events
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/login" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Log In
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/registration"
            className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 shadow-md"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className={`relative flex flex-col items-center justify-center text-center pt-48 pb-24 px-4 min-h-screen transition-all duration-900 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Event-Themed Decor */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-pink-400/30 rounded-full animate-bounce-slow delay-200"></div>

        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-xl animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          Discover Epic Events at EventSphere
        </h1>
        <p className="text-xl max-w-2xl mb-10 text-white/90 font-light tracking-wide animate-fade-in-up delay-100">
          Your gateway to unforgettable experiences—connect, celebrate, and create memories with us!
        </p>

        <a
          href="/registration"
          className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 duration-300 overflow-hidden group"
        >
          <span className="relative z-10">Join the Party</span>
          <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gradient-to-t from-black/90 to-transparent text-white relative z-10">
        © 2025 EventSphere. A Capstone System Project.
      </footer>

      {/* Custom CSS Animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </main>
  );
}