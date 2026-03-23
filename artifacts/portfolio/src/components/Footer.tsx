export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-[#0F172A]/80 backdrop-blur-sm z-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
        <p className="text-sm md:text-base text-[#E2E8F0] text-center font-medium">
          Crafted with passion and cutting-edge technologies
        </p>
        <p className="text-xs text-[#94A3B8] text-center">
          © {new Date().getFullYear()} Kajal Manjhi. Built with React, Tailwind CSS & Vite
        </p>
      </div>
    </footer>
  );
}
