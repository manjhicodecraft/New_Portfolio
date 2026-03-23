import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const photos = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovering) {
      interval = setInterval(() => {
        setPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 1000);
    } else {
      setPhotoIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-lg md:text-xl text-gradient italic font-medium">
          "Engineering student passionate about solving problems and building innovative solutions"
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        
        {/* Left Side - Avatar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div 
            className="relative w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden p-1 shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              background: "linear-gradient(45deg, #8B5CF6, #22D3EE)"
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0F172A]">
              <img 
                src={photos[photoIndex]} 
                alt="Kajal Manjhi" 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[#E2E8F0] space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p>
            I'm a 3rd-year Computer Science Engineering student with a deep passion for solving real-world problems through innovative code solutions.
          </p>
          <p>
            My journey began with a strong foundation in C and C++, which continues to fuel my problem-solving approach and technical excellence.
          </p>
          <p>
            As a Backend developer, I'm constantly exploring emerging technologies and refining my craft. Currently diving deeper into Java and AI/ML concepts.
          </p>
          <p>
            I thrive in collaborative environments where creativity meets technical excellence, particularly in hackathons and team-based projects that push my boundaries.
          </p>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
            🎓 Education
          </h3>
          <div className="space-y-2 text-[#94A3B8]">
            <p className="font-medium text-[#E2E8F0]">Computer Science Engineering</p>
            <p>3rd Year Student</p>
            <p className="text-sm">Focused on core CS fundamentals and practical applications</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
            🎯 Current Focus
          </h3>
          <div className="space-y-2 text-[#94A3B8]">
            <p className="font-medium text-[#E2E8F0]">Advanced Problem Solving</p>
            <p className="text-sm">Exploring AI/ML, building scalable systems, and competitive programming</p>
            <p className="text-sm">Expanding expertise in modern development practices</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
            💻 Languages & Tools
          </h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Skilled in C, C++, Java, and Python, with hands-on experience using VS Code, IntelliJ IDEA, and GitHub for efficient development and version control.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}
