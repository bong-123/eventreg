"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  image: string;
}

const EventPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/events/");
        setEvents(response.data);
        setLoading(false);
      } catch (err: any) {
        setError("Error fetching events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#4a00e0_0%,_#8e2de2_50%,_#ff6bcb_100%)] text-white">
        <div className="text-2xl font-semibold animate-pulse">Loading Events...</div>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#4a00e0_0%,_#8e2de2_50%,_#ff6bcb_100%)] text-white">
        <div className="text-xl font-medium">{error}</div>
      </div>
    );

  return (
    
    <main className="min-h-screen bg-[radial-gradient(circle_at_center,_#4a00e0_0%,_#8e2de2_50%,_#ff6bcb_100%)] text-white overflow-hidden">
      {/* Animated Background Particles */}
      {/* Custom CSS Animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
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
          <a href="/" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/event" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Events
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/login" className="text-gray-800 hover:text-purple-600 transition duration-300 relative group">
            Log In
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/registration" className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 shadow-md">
            Sign Up
          </a>
        </nav>
      </header>

      {/* Events Section */}
      <section className="py-24 px-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 drop-shadow-xl animate-fade-in">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={event.image || "https://via.placeholder.com/400x200"}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
                    Register Now
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{event.description}</p>
                <p className="text-gray-500 mt-3 font-medium">
                  <span className="text-purple-500">📍</span> {event.location}
                </p>
                <p className="text-gray-500 mt-1 text-sm">
                  <span className="text-purple-500">🕒</span>{" "}
                  {new Date(event.start_time).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  • {new Date(event.start_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} -{" "}
                  {new Date(event.end_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gradient-to-t from-black/90 to-transparent text-white relative z-10">
        © 2025 EventSphere. A Capstone System Project.
      </footer>

      
    </main>
  );
};

export default EventPage;