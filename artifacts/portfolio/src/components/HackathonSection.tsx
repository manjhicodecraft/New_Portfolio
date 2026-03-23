import { motion } from "framer-motion";
import { Trophy, Lightbulb, Rocket, Leaf } from "lucide-react";

export default function HackathonSection() {
  const hackathons = [
    {
      title: "Navonmesh Hackathon",
      icon: <Trophy className="text-yellow-400" size={24} />,
      org: "RNTU & SCOPE University | Participated",
      desc: "University-level hackathon showcasing innovative engineering solutions"
    },
    {
      title: "HackPrix",
      icon: <Lightbulb className="text-[#22D3EE]" size={24} />,
      org: "Lord Institute, Hyderabad | Innovation Focus",
      desc: "Focused on creative problem-solving and technological innovation"
    },
    {
      title: "RNTU Tech-Fest Hackathon",
      icon: <Rocket className="text-[#8B5CF6]" size={24} />,
      org: "RNTU | Flagship Event",
      desc: "Flagship hackathon event demonstrating technical excellence and teamwork"
    },
    {
      title: "Eco-Code",
      icon: <Leaf className="text-green-400" size={24} />,
      org: "Bharati Vidyapeeth's College of Engineering (BVCOE), New Delhi | Green Innovation Focus",
      desc: "National level hackathon"
    }
  ];

  return (
    <section id="hackathon" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          className="text-4xl md:text-5xl font-bold text-gradient mb-4"
        >
          Hackathon Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 0.1 }}
          className="text-[#94A3B8] text-lg max-w-2xl mx-auto"
        >
          Competed at top engineering hackathons, collaborating with peers to solve real-world problems
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((hackathon, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-[#8B5CF6] hover:bg-white/[0.08] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#0F172A] border border-white/10 shrink-0">
                {hackathon.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">{hackathon.title}</h3>
                <p className="text-sm text-[#22D3EE] font-medium mb-3">{hackathon.org}</p>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{hackathon.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
