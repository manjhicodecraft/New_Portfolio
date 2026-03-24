import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Vani AI | FEATURED PROJECT",
      icon: "🎙️",
      featured: true,
      description: "A sophisticated voice recognition system that processes audio input, interprets intent, and executes commands. Built with advanced audio processing and machine learning algorithms.",
      features: "Real-time Voice Processing, Natural Language Understanding, Task Automation",
      tags: ["Python", "AI/ML", "Voice Processing", "NLP"],
      url: "https://github.com/manjhicodecraft/Vani-Ai.git"
    },
    {
      id: 2,
      title: "ai-secure-identity-verifier",
      icon: "🔐",
      featured: false,
      description: "AI Secure Digital Identity Verifier is a privacy-focused platform that uses AI and Machine Learning to securely verify digital identity documents and prevent fraud.",
      features: "Secure & privacy-preserving verification, AI-based identity validation, Fast and automated processing, Fraud detection and prevention",
      tags: ["Python", "AI/ML", "Security"],
      url: "https://github.com/manjhicodecraft/ai-secure-identity-verifier.git"
    },
    {
      id: 3,
      title: "Deepfake Detection",
      icon: "🤖",
      featured: false,
      description: "A Python-based machine learning project that detects AI-generated or deepfake content across images, videos, and audio using advanced pattern analysis.",
      features: "Image analysis for face artifacts, Video detection with frame & temporal analysis, Audio analysis using spectral patterns, Multi-modal ML-based detection",
      tags: ["Python", "ML", "Computer Vision"],
      url: "https://github.com/manjhicodecraft/Deepfake-Detection.git"
    },
    {
      id: 4,
      title: "Netra - AI Campus Security",
      icon: "🎥",
      featured: false,
      description: "AI-powered surveillance system using computer vision to monitor campus activities in real time.",
      features: "Real-time CCTV monitoring, Unauthorized access detection, Suspicious activity identification, People counting, AI computer vision",
      tags: ["Python", "Computer Vision", "AI"],
      url: "https://github.com/manjhicodecraft/Netra.git"
    },
    {
      id: 5,
      title: "Smart AI Habit Tracker",
      icon: "📊",
      featured: false,
      description: "AI-powered platform that helps users build consistent habits and improve productivity through smart tracking and insights.",
      features: "Habit and task tracking, AI-driven insights and motivation, Progress analytics, Daily routine management, Smart productivity enhancement",
      tags: ["Python", "AI", "Productivity"],
      url: "https://github.com/manjhicodecraft/Smart-AI-Habit-Tracker.git"
    },
    {
      id: 6,
      title: "Personal Expense Tracker",
      icon: "💰",
      featured: false,
      description: "A personal expense tracker for managing and monitoring expenses across multiple accounts efficiently.",
      features: "Multi-account management, Expense tracking and categorization, Spending insights and analysis, Transaction history tracking",
      tags: ["Python", "Finance", "Tracking"],
      url: "https://github.com/manjhicodecraft/minor-project-submit.git"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          className="text-4xl md:text-5xl font-bold text-gradient mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 0.1 }}
          className="text-[#94A3B8] text-lg max-w-2xl mx-auto"
        >
          Showcasing innovative solutions and technical expertise
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ delay: idx * 0.1 }}
            className={`glass-card rounded-2xl flex flex-col h-full overflow-hidden ${
              project.featured 
                ? 'border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.15)] relative' 
                : 'border-white/10 hover:border-[#22D3EE]/50 transition-colors'
            }`}
          >
            {project.featured && (
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#8B5CF6] to-transparent w-full h-1" />
            )}
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <h3 className={`font-bold text-lg leading-tight ${project.featured ? 'text-[#A78BFA]' : 'text-[#F8FAFC]'}`}>
                  {project.title}
                </h3>
              </div>
              
              <p className="text-[#94A3B8] text-sm mb-4 flex-1">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#E2E8F0] mb-2 uppercase tracking-wider opacity-80">Key Features:</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.features}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-[#0F172A] text-[#22D3EE] border border-[#22D3EE]/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                <Button
                  variant="outline"
                  className="w-full border-[#8B5CF6]/50 text-[#E2E8F0] hover:bg-[#8B5CF6] hover:text-white transition-all gap-2"
                >
                  <Code2 size={16} /> View Code
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
