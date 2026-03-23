import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full"
        >
          {/* Glowing Circle Border */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_40px_rgba(139,92,246,0.3),inset_0_0_40px_rgba(34,211,238,0.2)]" />
          
          {/* Butterfly Orbit */}
          <div className="butterfly-orbit flex items-center justify-center">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">🦋</span>
          </div>

          <h1 className="text-[36px] md:text-[64px] font-bold text-gradient leading-tight tracking-tight text-center z-10">
            Kajal Manjhi
          </h1>
          <p className="text-[17px] md:text-[22px] text-[#22D3EE] font-medium tracking-wide z-10 mt-1">
            Software Engineer
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 mt-10 md:mt-12 z-20"
        >
          <button 
            onClick={() => scrollTo('#projects')}
            className="w-[140px] md:w-[105px] h-[38px] md:h-[36px] text-[13px] md:text-[14px] font-semibold text-[#E2E8F0] border border-[#8B5CF6] rounded hover:bg-[#8B5CF6]/10 transition-all duration-300"
          >
            View Work
          </button>
          
          <button 
            onClick={() => scrollTo('#contact')}
            className="w-[140px] md:w-[105px] h-[38px] md:h-[36px] text-[13px] md:text-[14px] font-semibold text-[#0F172A] bg-[#22D3EE] rounded hover:bg-[#67E8F9] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}
