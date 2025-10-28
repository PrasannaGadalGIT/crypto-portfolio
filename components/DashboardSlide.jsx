"use client";
import { useEffect, useRef, useState } from "react";

export default function DashboardSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleStats, setVisibleStats] = useState([false, false, false, false]);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { label: "Clients", value: "12K", numValue: 12 },
    { label: "Annual Growth", value: "55%", numValue: 55 },
    { label: "No of Projects", value: "5K", numValue: 5 },
    { label: "Positive Ratings", value: "80%", numValue: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Stagger the stat card animations
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats((prev) => {
                  const newStats = [...prev];
                  newStats[index] = true;
                  return newStats;
                });
                
                // Animate numbers counting up
                const duration = 1000;
                const steps = 50;
                const stepValue = stats[index].numValue / steps;
                let currentStep = 0;
                
                const interval = setInterval(() => {
                  currentStep++;
                  setAnimatedValues((prev) => {
                    const newValues = [...prev];
                    newValues[index] = Math.min(
                      Math.round(stepValue * currentStep),
                      stats[index].numValue
                    );
                    return newValues;
                  });
                  
                  if (currentStep >= steps) {
                    clearInterval(interval);
                  }
                }, duration / steps);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getDisplayValue = (stat, index) => {
    if (!visibleStats[index]) return "0";
    
    if (stat.label === "Clients") {
      return `${animatedValues[index]}K`;
    } else if (stat.label === "No of Projects") {
      return `${animatedValues[index]}K`;
    } else {
      return `${animatedValues[index]}%`;
    }
  };

  return (
    <section className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See your <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">DeFi credit dashboard</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Visualize your financial health with a comprehensive wallet performance overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden group ${
                visibleStats[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent relative z-10">
                {getDisplayValue(stat, index)}
              </span>
              <span className="text-gray-500 mt-2 relative z-10">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Launch Button */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 hover:scale-110 hover:shadow-2xl transition-all duration-300">
            Launch
          </button>
        </div>
      </div>
    </section>
  );
}