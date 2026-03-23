import { useState } from "react";
import { motion } from "framer-motion";

type Tab = "Languages" | "Frontend" | "Tools";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Languages");

  const tabs: Tab[] = ["Languages", "Frontend", "Tools"];

  const skillsData = {
    Languages: [
      { name: "C", icon: "⚡", progress: 95 },
      { name: "C++", icon: "🔧", progress: 90, active: true },
      { name: "Java", icon: "☕", progress: 75 },
      { name: "Python", icon: "🐍", progress: 65 },
    ],
    Frontend: [
      { name: "HTML/CSS", icon: "🌐", progress: 80 },
      { name: "JavaScript", icon: "📜", progress: 70 },
      { name: "React (learning)", icon: "⚛️", progress: 50 },
    ],
    Tools: [
      { name: "VS Code", icon: "💻", progress: 90 },
      { name: "IntelliJ IDEA", icon: "⚙️", progress: 80 },
      { name: "GitHub", icon: "🐙", progress: 85 },
      { name: "Git", icon: "🔀", progress: 80 },
    ]
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gradient mb-4"
        >
          Technical Arsenal
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#94A3B8] text-lg"
        >
          Mastering languages and technologies to build robust solutions
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab 
                ? "bg-[#8B5CF6] text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                : "bg-transparent border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 min-h-[300px]">
        {skillsData[activeTab].map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`glass-card rounded-2xl p-6 ${skill.active ? 'border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.15)]' : ''}`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <h4 className="text-[#F8FAFC] font-semibold text-lg">{skill.name}</h4>
              </div>
              <span className="text-[#22D3EE] font-bold">{skill.progress}%</span>
            </div>
            <div className="w-full bg-[#0F172A] rounded-full h-2.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] h-2.5 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card bg-[#1E293B]/50 rounded-2xl p-8 border border-white/5"
      >
        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">🚀 Currently Learning</h3>
        <p className="text-[#94A3B8] mb-6">Expanding my skillset to build more powerful and scalable applications</p>
        
        <div className="flex flex-wrap gap-3">
          {["Python", "Web Development", "AI/ML Concepts", "Database Design"].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#22D3EE]/30 text-[#22D3EE] text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
