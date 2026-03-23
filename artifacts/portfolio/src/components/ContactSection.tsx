import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, CheckCircle2, Send, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "kajalmanjhi0407@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied to clipboard!",
      description: "Looking forward to hearing from you.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          className="text-4xl md:text-5xl font-bold text-gradient mb-4"
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 0.1 }}
          className="text-[#94A3B8] text-lg max-w-2xl mx-auto"
        >
          Whether you want to collaborate on an exciting project, discuss tech, or just say hello—I'd love to hear from you!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
          onClick={handleCopyEmail}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Mail className="text-[#A78BFA] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">Email</h3>
          <p className="text-[#E2E8F0] text-sm break-all">{email}</p>
          <div className="mt-4 text-[#22D3EE] text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
            {copied ? "Copied!" : "Click to Copy"}
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/manjhicodecraft"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#22D3EE]/50 transition-colors"
        >
          <Github className="text-[#E2E8F0] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">GitHub</h3>
          <p className="text-[#94A3B8] text-sm break-all">manjhicodecraft</p>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/kajal-manjhi-455b8634a/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#0077b5]/50 transition-colors"
        >
          <Linkedin className="text-[#0077b5] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">LinkedIn</h3>
          <p className="text-[#94A3B8] text-sm break-all">Kajal Manjhi</p>
        </motion.a>
      </div>

      {/* Quick Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-8 border border-[#8B5CF6]/30"
      >
        <div className="flex items-center gap-3 mb-8">
          <Send className="text-[#22D3EE]" size={24} />
          <h3 className="text-2xl font-bold text-[#F8FAFC]">Quick Message</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-[#E2E8F0]">Send me a message directly via email.</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#94A3B8] mb-1 block">Your name or company</label>
                <Input 
                  placeholder="e.g. John Doe / Tech Corp" 
                  className="bg-[#0F172A] border-[#1E293B] text-white focus-visible:ring-[#8B5CF6]"
                />
              </div>
              <Button 
                onClick={handleCopyEmail}
                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
              >
                Copy Email Address
              </Button>
            </div>
          </div>

          <div className="bg-[#0F172A]/50 p-6 rounded-xl border border-white/5 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="text-[#A78BFA] mt-0.5" size={18} />
              <div>
                <p className="text-sm font-semibold text-[#E2E8F0]">Response Time</p>
                <p className="text-xs text-[#94A3B8]">24-48 Hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Globe className="text-[#22D3EE] mt-0.5" size={18} />
              <div>
                <p className="text-sm font-semibold text-[#E2E8F0]">Time Zone</p>
                <p className="text-xs text-[#94A3B8]">IST (UTC+5:30)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-400 mt-0.5" size={18} />
              <div>
                <p className="text-sm font-semibold text-[#E2E8F0]">Available For</p>
                <p className="text-xs text-[#94A3B8]">Projects, Discussions & Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
