import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { createPortal } from "react-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const Navbar = ({ darkMode, toggleDark }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const handleClick = (href: string) => {
    setOpen(false);
    setActiveSection(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold glow-text cursor-pointer"
        >
          &lt;Hira/&gt;
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              aria-current={activeSection === l.href ? "page" : undefined}
              className={`nav-link text-sm font-medium ${
                activeSection === l.href ? "nav-link-active" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleDark}
            className="ml-3 p-2 rounded-lg glass-card transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <button onClick={toggleDark} className="p-2 rounded-lg glass-card" aria-label="Toggle theme">
            {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label="Menu" aria-expanded={open}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[998] nav-overlay lg:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div
                key="menu-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 z-[999] w-[78vw] max-w-sm nav-drawer border-l border-border/30 shadow-2xl lg:hidden rounded-tl-2xl rounded-bl-2xl overflow-y-auto"
              >
                <div className="h-full flex flex-col justify-between px-6 py-6">
                  <div className="space-y-1 pt-12">
                    {navLinks.map((l) => (
                      <button
                        key={l.href}
                        onClick={() => handleClick(l.href)}
                        aria-current={activeSection === l.href ? "page" : undefined}
                        className={`block text-left text-base font-medium nav-link-mobile ${
                          activeSection === l.href ? "nav-link-mobile-active" : ""
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tap outside to close</span>
                    <button className="underline text-accent" onClick={() => setOpen(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
};

export default Navbar;
