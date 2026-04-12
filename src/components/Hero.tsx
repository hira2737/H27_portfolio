import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { HiDownload, HiMail, HiCog } from "react-icons/hi";
import { SiCplusplus, SiJavascript } from "react-icons/si";

// 6 floating icons
const floatingIcons = [
  { icon: <SiCplusplus size={16} />, label: "C++" },
  { icon: <SiJavascript size={16} />, label: "JS" },
  { icon: <HiCog size={16} />, label: "Cog" },
  { icon: <FaHtml5 size={16} />, label: "HTML" },
  { icon: <FaPython size={16} />, label: "Python" },
  { icon: <FaReact size={16} />, label: "React" },
];

// Generate a random path with multiple waypoints for natural wandering
const generatePath = (seed: number) => {
  const points = 6;
  const xs: number[] = [];
  const ys: number[] = [];
  // Keep within safe margins (10%-90% of card, avoiding center 30%-70% band)
  for (let i = 0; i < points; i++) {
    let x = (seed * (i + 1) * 7.3) % 100;
    let y = (seed * (i + 1) * 11.7) % 100;
    // Map to edges: 5-25% or 75-95%
    x = x < 50 ? 5 + (x / 50) * 20 : 75 + ((x - 50) / 50) * 20;
    y = y < 50 ? 5 + (y / 50) * 20 : 70 + ((y - 50) / 50) * 20;
    xs.push(x);
    ys.push(y);
  }
  // Close the loop
  xs.push(xs[0]);
  ys.push(ys[0]);
  return { xs, ys };
};

const Hero = () => {
  const skills = ["Python", "JavaScript", "React"];
  const [activeSkill, setActiveSkill] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const iconPaths = useMemo(() =>
    floatingIcons.map((_, i) => generatePath(i * 17 + 3)),
    []
  );

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium text-sm sm:text-base mb-4"
            >
              Learning by building practical projects.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-bold mb-4 text-foreground"
            >
              Hira Nandhani M
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-foreground/70 text-base sm:text-lg md:text-xl mb-4 font-medium"
            >
              Computer Science Student | Python Enthusiast | Web Development Learner
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-muted-foreground max-w-lg mb-6 leading-relaxed text-sm sm:text-base"
            >
              Aspiring developer focused on practical products, clean UI, and strong problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-8"
            >
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-accent" /> Chennai, India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" /> Open to internships
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary-glow flex items-center justify-center gap-2 w-full sm:w-auto">
                <HiMail size={18} /> Contact Me
              </a>
              <a
                href="/Hira_Resume.pdf"
                download="Hira_Resume.pdf"
                className="btn-outline-glow flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <HiDownload size={18} /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex items-center gap-4 flex-wrap"
            >
              {[
                { icon: <FaGithub size={20} />, href: "https://github.com/hira2737", label: "GitHub" },
                { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/hira2737/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card transition-all duration-300 hover:scale-105 hover:text-accent"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card learning-card p-4 sm:p-5 md:p-6 relative overflow-hidden w-full max-w-full sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 min-w-0"
          >
            <div className="learning-card-blobs" aria-hidden="true">
              <span className="learning-blob learning-blob-one" />
              <span className="learning-blob learning-blob-two" />
              <span className="learning-blob learning-blob-three" />
            </div>

            {/* Floating icons — random wandering paths */}
            {floatingIcons.map((item, i) => {
              const path = iconPaths[i];
              const duration = 12 + i * 3;
              return (
                <motion.div
                  key={item.label}
                  className="absolute w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-card flex items-center justify-center floating-icon-bright z-[2] pointer-events-none"
                  style={{ top: 0, left: 0 }}
                  aria-hidden="true"
                  animate={{
                    top: path.ys.map((v) => `${v}%`),
                    left: path.xs.map((v) => `${v}%`),
                  }}
                  transition={{
                    duration,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: path.xs.map((_, idx) => idx / (path.xs.length - 1)),
                  }}
                >
                  {item.icon}
                </motion.div>
              );
            })}

            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6 learning-card-header relative z-10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-muted-foreground">
                <span className="text-accent">✦</span> live_build.panel
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-accent font-medium">
                <span>✎</span> My Learning Journey
              </div>
            </div>

            <div className="learning-card-orbs">
              <span className="learning-orb" />
              <span className="learning-orb learning-orb-two" />
            </div>

            <div className="space-y-3 sm:space-y-5 mb-4 sm:mb-6 relative z-10">
              {[
                { label: "Learning Consistency", value: 84 },
                { label: "Project Practice", value: 80 },
                { label: "Problem Solving", value: 86 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex flex-wrap justify-between gap-2 text-xs sm:text-sm mb-2 learning-progress-row">
                    <span className="text-foreground/70">{item.label}</span>
                    <span className="text-foreground/70 whitespace-nowrap">{item.value}%</span>
                  </div>
                  <div className="progress-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="progress-fill"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="learning-pill-group mb-4 sm:mb-6 relative z-10 flex-wrap">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`learning-pill ${index === activeSkill ? "learning-pill-active" : ""}`}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border/30 relative z-10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                <span className="text-accent">⚙</span> CGPA 9.3
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                <span className="text-accent">◎</span> Open to internships
              </div>
            </div>

            <p className="text-muted-foreground text-[11px] sm:text-xs mt-4 relative z-10 leading-relaxed">
              Building practical projects while strengthening core development fundamentals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
