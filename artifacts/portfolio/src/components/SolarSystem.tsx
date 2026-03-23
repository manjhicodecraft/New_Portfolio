import { useEffect, useState } from "react";

export default function SolarSystem() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0F172A] pointer-events-none">
      {/* Background Image Reference */}
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/solar-system.png')" }}
      />
      
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Sun */}
      <div 
        className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 blur-[8px]"
        style={{ boxShadow: "0 0 100px 50px rgba(249, 115, 22, 0.4)" }}
      />

      {/* Orbits & Planets */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        {/* Planet 1: Mercury (Grey) */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-0 top-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400 shadow-[0_0_10px_2px_rgba(156,163,175,0.8)]" />
        </div>

        {/* Planet 2: Venus (Orange) */}
        <div className="absolute left-0 top-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-0 top-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_15s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_15px_3px_rgba(251,146,60,0.8)]" />
        </div>

        {/* Planet 3: Earth (Blue) */}
        <div className="absolute left-0 top-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-0 top-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)]" />
        </div>

        {/* Planet 4: Mars (Red) */}
        <div className="absolute left-0 top-0 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-0 top-0 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_25s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_15px_3px_rgba(239,68,68,0.8)]" />
        </div>

        {/* Asteroid Belt */}
        <div className="absolute left-0 top-0 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[20px] border-dotted border-white/5 animate-[spin_40s_linear_infinite] opacity-30" />

        {/* Planet 5: Jupiter (Yellow/Orange) */}
        <div className="absolute left-0 top-0 w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-0 top-0 w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-[spin_35s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-600 shadow-[0_0_20px_5px_rgba(202,138,4,0.8)]" />
        </div>
      </div>
      
      {/* Overlay gradient to blend bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]" />
    </div>
  );
}
