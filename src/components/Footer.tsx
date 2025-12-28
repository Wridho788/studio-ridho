export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-8 bg-deep-secondary text-neutral-bg/80">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-white mb-2">Ridho</p>
            <p className="text-sm">Ravatech - Digital Product Builder</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:contact@ravatech.id"
              className="hover:text-accent-warm transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-warm transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/ridho"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-warm transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-bg/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Ravatech. Professional digital solutions.</p>
        </div>
      </div>
    </footer>
  );
}
